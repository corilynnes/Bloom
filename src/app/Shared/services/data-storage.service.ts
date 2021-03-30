import { HttpClient } from "@angular/common/http";
import {  Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class DataStorageService{
constructor(private http:HttpClient){}

public storePlant(key: string, value: string) {
    this.http.put('https://bloom-ef483-default-rtdb.firebaseio.com/userJungle.json',this)
    .subscribe(response=>{
console.log(response);
    });
}

public getItem(key: string) {
    return localStorage.getItem(key)
}
public removeItem(key: string) {
    localStorage.removeItem(key);
}
public clear() {
    localStorage.clear();
}
}
