package com.DataService.Rabbit;

import com.DataService.ReadFileJson;
import com.DataService.command.rest.CreateSymptomRestModel;
import com.DataService.command.rest.CreateUserRestModel;
import com.DataService.query.rest.SymptomRestModel;
import com.DataService.query.rest.UserRestModel;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.amqp.rabbit.core.RabbitTemplate;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.*;

@RestController
public class Requestandreply {
    @Autowired
    private RabbitTemplate rabbitTemplate;

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public UserRestModel Register(@RequestBody CreateUserRestModel model) {
        UserRestModel userRest = new UserRestModel();
        List<UserRestModel> alldata = (List<UserRestModel>) rabbitTemplate.convertSendAndReceive("Direct", "users", "");

        for(UserRestModel j : alldata){
            if(j.getEmail().equals(model.getEmail())){
                System.out.println("1");
                return null;
            }
        }
        String m = (String) rabbitTemplate.convertSendAndReceive("Direct", "register", model);

        for (UserRestModel i : alldata){
            if(i.getUserID().equals(m)){

                userRest = i;
            }
        }System.out.println("2");

        return userRest;
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public Object Login(@RequestBody LoginRestModel model){
        System.out.println("login");
        List<UserRestModel> userRest = new ArrayList<>();
        userRest.add((UserRestModel) rabbitTemplate.convertSendAndReceive("Direct" ,"login", model));
        return userRest.get(0);
    }

    @GetMapping(value = "/disease")
    public ArrayList getDisease(){
        System.out.println("/disease");
        return new ReadFileJson().getReadFileJson();

    }
    @GetMapping(value = "findsymptom/{n1}")
    public ArrayList getFindsymptom(@PathVariable("n1") String n1){
        return new ReadFileJson().getFindSymptom(n1);
    }
    @GetMapping(value = "disease/{n1}")
    public Object getDisease(@PathVariable("n1") String n1){
        return new ReadFileJson().getReadFileJson(n1);
    }

    @PostMapping(value = "/symptom")
    public String setSymtom(@RequestBody CreateSymptomRestModel model){
        System.out.println("Symtom");

        String m = (String) rabbitTemplate.convertSendAndReceive("Direct", "symptom", model);
      return m;
    };
    @GetMapping(value = "/allarkarn")
    public Set<String> allarken(){
        Set<String> ans = new HashSet<>();
        JSONParser jsonParser = new JSONParser();
        ArrayList namelist= new ArrayList();
        try {
            FileReader reader = new FileReader("C:\\Users\\flukg\\Mobile Project\\DoctorReady\\Back-End\\DataService\\src\\main\\java\\com\\DataService\\sop.json");
            Object obj = jsonParser.parse(reader);
            JSONObject jsonOBJ = (JSONObject) obj;
            namelist = (ArrayList) jsonOBJ.get("namelist");


        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ParseException e) {
            e.printStackTrace();
        }
        for(var i = 0;i< namelist.size(); i++){
            JSONObject obj = (JSONObject) namelist.get(i);
            ArrayList<String> array = (ArrayList<String>) obj.get("findSymptom");
            for(Object j :  array){
                ans.add((String) j);

            }
        }
        return ans;

    }

    @GetMapping(value="/check/{email}" )
    public String getCheck(@PathVariable String email){
        List<UserRestModel> m = (List<UserRestModel>) rabbitTemplate.convertSendAndReceive("Direct", "users", "");
        for (UserRestModel i : m){
            if(i.getEmail().equals(email)){
                return "false";
            }
        }

        return "true";
    }
    @GetMapping(value = "getSymtom/{email}")
    public SymptomRestModel getSymtom(@PathVariable("email") String email){
        System.out.println(email);
        List<SymptomRestModel> m = (List<SymptomRestModel>) rabbitTemplate.convertSendAndReceive("Direct", "getsymp", "");
        SymptomRestModel result = null;
        for(int i = m.size()-1;0<=i; i--){
            if(m.get(i).getEmail().equals(email)){

                result = m.get(i);
                break;
            }
        }
        System.out.println(result);

        return result;

    }


    @PostMapping(value ="arkans")
    public List<Map.Entry<Object, Integer>> process(@RequestBody LinkedHashMap<String, ArrayList<String>> list){
        JSONParser jsonParser = new JSONParser();
        ArrayList namelist= new ArrayList();
        try {
            FileReader reader = new FileReader("C:\\Users\\flukg\\Mobile Project\\DoctorReady\\Back-End\\DataService\\src\\main\\java\\com\\DataService\\sop.json");
            Object obj = jsonParser.parse(reader);
            JSONObject jsonOBJ = (JSONObject) obj;
            namelist = (ArrayList) jsonOBJ.get("namelist");


        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ParseException e) {
            e.printStackTrace();
        }
        ArrayList input = list.get("arkan");
        ArrayList<String> have_diseases = new ArrayList();
        ArrayList<String> have_disease = new ArrayList();
        for(int i = 0;i<namelist.size();i++){
        JSONObject obj = (JSONObject) namelist.get(i);
        ArrayList disease = (ArrayList) obj.get("findSymptom");
            for (Object j : input){
                for (Object k : disease){
                    if(j.equals(k)){
                        if(have_disease.size() == 0) {

                            have_disease.add( ((String)((JSONObject) namelist.get(i)).get("name")));
                        }else{
                            Integer size = have_disease.size();
                            Integer check = 0;
                            for (int l = 0;l<size;l++){
                                if(have_disease.get(l).equals(((String) ((JSONObject) namelist.get(i)).get("name")))){
                                    check = 1;
                                }
                            }
                            if (check == 0){
                                have_disease.add(((String) ((JSONObject) namelist.get(i)).get("name")));
                            }
                        }
                        have_diseases.add((String) ((JSONObject) namelist.get(i)).get("name"));

                    }

                }
            }
        }
        Map<Object, Integer> result = new LinkedHashMap<>();

        for(Object obj : have_disease){
            result.put(obj,0);
        }
        for(String str : have_disease){
            for(String strs : have_diseases){
                if(str.equals(strs)){
                    result.put(str, result.get(str)+1);

                }
            }
        }
        Set<Map.Entry<Object, Integer>> entrySet = result.entrySet();
        List<Map.Entry<Object, Integer>> ans = new ArrayList<>(entrySet);
        Collections.sort(ans, new Comparator<Map.Entry<Object, Integer>>() {
            @Override
            public int compare(Map.Entry<Object, Integer> o1, Map.Entry<Object, Integer> o2) {
                return o2.getValue().compareTo(o1.getValue());
            }
        });
        return ans;

    }
}