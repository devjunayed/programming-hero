/** Practice Task 5
 * You are in a hurry to go to your school on time. But when you
 * are crossing the road, the traffice signal is red coloured. In
 * this situation, if you try to cross the road, you may be in 
 * danger. If you notice a yello coloured traffice signal, you
 * should stop. If you notice a green colored traffic signal, 
 * you should cross the road. So write a JS code. where there
 * is a variable called signal. Its value can be green, yellow
 * or red & we will get different activities as output depending 
 * on the variable. So, hurry up. 
 */
// using if-else
var signal = 'green';

if(signal == 'red'){
    console.log('You may be in danger!');
}else if(signal == 'yellow'){
    console.log('You should stop!');
}else{
    console.log('You should cross the road.');
}


// using switch
signal = 'red';
switch(signal){
    case 'red':
        console.log('You may be in danger!');
        break;
    case 'yellow':
        console.log('You should stop!');
        break;
    default:
        console.log('You should cross the road.');

}