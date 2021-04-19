function orden_Burbuja(numeros) { 
    let n= numeros.length - 1;
    let intercambiar;
     
     do{
       intercambiar=false;
       for(let i=0;i<n;i++){
       if(numeros[i]>numeros[i+1]){
          let temp=numeros[i];
          numeros[i]=numeros[i+1];
          numeros[i+1]=temp;
          intercambiar=true;
         }
         }
         --n;
     }while(intercambiar);
     return numeros; 
     }
     let numeros=[3,7,2,11,2,13,1,5,19];
     console.log(numeros);
     let resultado=orden_Burbuja(numeros);
   console.log(resultado);