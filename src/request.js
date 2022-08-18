export class Request {
    constructor(url){
        this.url = url 
    }
    async getData(){
        const response = await fetch(this.url);
        const responseData = await response.json();
        return responseData;
    }
}