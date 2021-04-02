


class StrongPasswordService {
    public execute(password: string) : string {
        const caraters = '!@#$%&*;></?,.´`{}[]=+-_';
        const specialCarater =  caraters.charAt(Math.floor(Math.random() * caraters.length));
        const specialCarater2 =  caraters.charAt(Math.floor(Math.random() * caraters.length));
        const newPassword = this.newPassword(specialCarater, specialCarater2, password.split(''))        
        return newPassword;
        
    }

    public newPassword (caracter1: string, caracter2: string, pw:Array<string>) : string {
    
    
    pw.splice(Math.round(Math.random() * pw.length), 0 , caracter1);
    pw.splice(Math.round(Math.random() * pw.length), 0 , caracter2);
    
    for (let i =0; i < pw.length; i++) {
        const item = pw[i]
         if(item === '1' ||item === '2'|| item === '3' ||  item === '4' || item === '4' ||
         item === '5' ||item === '6'|| item === '7'  ||  item === '8' || item === '9' || item === '0'){
             console.log(item)
            continue;
         }
         if(item === caracter1 || item === caracter2){
             console.log(i)
             continue
         }
         pw.splice(i, 1,  item.toUpperCase())
         break;
    }

    return  pw.join('');
    }
}

export default new StrongPasswordService();