function start(){
    with(document){
        let l1 = String(getElementById('left1').value);
        let l2 = String(getElementById('left2').value);
        let l3 = String(getElementById('left3').value);
        let l4 = String(getElementById('left4').value);
        let l5 = String(getElementById('left5').value);
        let l6 = String(getElementById('left6').value);
        let r1 = String(getElementById('right1').value);
        let r2 = String(getElementById('right2').value);
        let r3 = String(getElementById('right3').value);
        let r4 = String(getElementById('right4').value);
        let r5 = String(getElementById('right5').value);

        let result = 0;
        let quality;
        
        if(l1 =='Erevan'){
            result+=2;
            document.getElementById('left1').backgroundColor = 'green'
        }
        else{
            document.getElementById('left1').backgroundColor = 'red'
        }
        if(l2 =='Buenos-Aeros'){
            result+=2;
            document.getElementById('left2').backgroundColor = 'green'
        }
        else{
            document.getElementById('left2').backgroundColor = 'red'
        }if(l3 =='Tokyo'){
            result+=2;
            document.getElementById('left3').backgroundColor = 'green'
        }
        else{
            document.getElementById('left3').backgroundColor = 'red'
        }
        if(l4 =='Paris'){
            result+=2;
            document.getElementById('left4').backgroundColor = 'green'
        }
        else{
            document.getElementById('left4').backgroundColor = 'red'
        }
        if(l5 =='Oslo'){
            result+=2;
            document.getElementById('left5').backgroundColor = 'green'
        }
        else{
            document.getElementById('left5').backgroundColor = 'red'
        }
        if(l6 =='Berlin'){
            result+=2;
            document.getElementById('left6').backgroundColor = 'green'
        }
        else{
            document.getElementById('left6').backgroundColor = 'red'
        }
        if(r1 =='Seul'){
            result+=2;
            document.getElementById('right1').backgroundColor = 'green'
        }
        else{
            document.getElementById('right1').backgroundColor = 'red'
        }
        if(r2 =='Stokholm'){
            result+=2;
            document.getElementById('right2').backgroundColor = 'green'
        }
        else{
            document.getElementById('right2').backgroundColor = 'red'
        }
        if(r3 =='Ottava'){
            result+=2;
            document.getElementById('right3').backgroundColor = 'green'
        }
        else{
            document.getElementById('right3').backgroundColor = 'red'
        }
        if(r4 =='Brazil'){
            result+=2;
            document.getElementById('right4').backgroundColor = 'green'
        }
        else{
            document.getElementById('right4').backgroundColor = 'red'
        }
        if(r5 =='Madrid'){
            result+=2;
            document.getElementById('right5').backgroundColor = 'green'
        }
        else{
            document.getElementById('right5').backgroundColor = 'red'
        }

        if(result <=6){
            quality = 'deficent'
            document.getElementById('score').color = 'red'
            document.getElementById('answer').color = 'red'
        }
        else if(result>6 && result <= 18){
            quality = 'good'
            document.getElementById('score').color = 'orange'
            document.getElementById('answer').color = 'orange'
        }
        else if(result>18 && result<22){ 
            quality = 'excellnt'
            document.getElementById('score').color = 'yellow'
            document.getElementById('answer').color = 'yellow'
        }
        document.getElementById('score').innerHTML = result
        document.getElementById('answer').innerHTML = quality
    }
}






