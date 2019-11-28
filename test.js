Promise = (executor)=>{
    let self = this;
    self.status = 'pending';
    self.data = undefined;
    self.onResolvedCallback = [];
    self.onRejectedCallback = [];
    let resolve = (value)=>{

    }
    let reject = (reason)=>{

    }
    try{
    executor(resolve,reject);
        }catch(e){
            reject(e);
        }
}