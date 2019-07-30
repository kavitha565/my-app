import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  streamData = new Observable((observable)=>{  // using Observable construtor function creating observable which takes function with observable object
    // observable.next(1);     // observable sends three types of notification to subscriber
    //                         // 1) next() - method used to deliver data
    //                         // 2) complete() - method to indicate excution completion
    //                         // 3) error() - method to indicate error
    // observable.next(2);
    // observable.next(3);
    // observable.complete();
    let i =0;
    setInterval(()=>{
     // observable.next("Interval of 1000 ms");
     observable.next(i++);
     if(i>6)
     observable.complete();
    },1000)
    
  })
  constructor(private http:HttpClient) {
  }
  loginService(username,password){
    return this.http.get(environment.endpoint.loginUrl+"?username="+username+"&password="+password); //returns observable
  }
  registerService(data){
    return this.http.post(environment.endpoint.registerUrl,data)
  }
  addProductService(data){
    return this.http.post(environment.endpoint.productAddUrl,data)
  }
  getAllProductsService(){
    return this.http.get(environment.endpoint.productGetAllUrl)
  }
  getProductService(searchData){
    return this.http.get(environment.endpoint.productGetUrl+"?search="+searchData)
  }
  updateProductService(data){
    return this.http.post(environment.endpoint.productUpdateUrl,data)
  }
  deleteProductService(data){
    return this.http.post(environment.endpoint.productDeleteUrl,data)
  }
  getCountries(searchPharse){
    return this.http.get(environment.endpoint.getCountriesUrl)
  }
  getCoursesService():Observable<any>{
    return this.http.get(environment.endpoint.course)
  }
  addCourseService(data){
    return this.http.post(environment.endpoint.course,data)
  }
  deleteCourseService(courseId){
    return this.http.delete(environment.endpoint.course+"/"+courseId)
  }
  testObservable(){
    // setInterval(()=>{
    //   console.log("In set Interval!!");
    //   return "data"
    // },1000)
    return this.streamData; // returns an observable
  }
  getProductInfoService(){
    return this.http.get(environment.endpoint.getProductsInfo)
  }
}
