package com.DataService;


import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

public class ReadFileJson {


    public ArrayList getReadFileJson(){
        JSONParser jsonParser = new JSONParser();
        ArrayList namelist= new ArrayList();
        try {
            FileReader reader = new FileReader("C:\\Users\\flukg\\Mobile Project\\DoctorReady\\Back-End\\DataService\\src\\main\\java\\com\\DataService\\sop.json");
            Object obj = jsonParser.parse(reader);
            JSONObject jsonOBJ = (JSONObject) obj;
            namelist = (ArrayList) jsonOBJ.get("namelist");
            System.out.println(namelist.get(0));

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return namelist;

    }
    public Object getReadFileJson(String name){
        ArrayList nameList = getReadFileJson();
        for(int i = 0 ; i< nameList.toArray().length; i++){
            JSONObject obj =(JSONObject) nameList.get(i);
            if(name.equals((String)obj.get("name"))){
                return obj;
            }

    }        ArrayList False = new ArrayList();
        False.add("False");
        return False;
    }
    public ArrayList getFindSymptom(String name){
        ArrayList nameList = getReadFileJson();
        for(int i = 0 ; i< nameList.toArray().length; i++){
            JSONObject obj =(JSONObject) nameList.get(i);
            if(name.equals((String)obj.get("name"))){
                return (ArrayList) obj.get("findSymptom");
            }


        }
        ArrayList False = new ArrayList();
        False.add("False");
        return False;
    }
    public ArrayList getArkan(){
        JSONParser jsonParser = new JSONParser();
        ArrayList arkan = new ArrayList();
        try {
            FileReader reader = new FileReader("C:\\Users\\flukg\\Mobile Project\\DoctorReady\\Back-End\\DataService\\src\\main\\java\\com\\DataService\\allarkarn.json");
            Object obj = jsonParser.parse(reader);
            JSONObject jsonOBJ = (JSONObject) obj;
            arkan = (ArrayList) jsonOBJ.get("arkan");

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return arkan;
    }
}
