$('.tap').tabs({
    event: 'click',
    PointerEvent: 'auto',
    // hide:{effect: 'explode', duration: 1000},
    // show:{effect: 'blind', duration:800},
    width: '600px',
    height: '500px'
});
$('.ta').tabs({
    event: 'click',
    PointerEvent: 'auto',
    // hide:{effect: 'explode', duration: 1000},
    // show:{effect: 'blind', duration:800},
    width: '600px',
    height: '500px'
});
var menu = document.getElementById('ul');
var cancel = document.getElementById('cancel');
 var bar =document.getElementById('bar');
 bar.addEventListener('click',function(){
    menu.style.display='block';
    bar.style.display='none';
    cancel.style.display='block';
 })
 cancel.addEventListener('click',function(){
    menu.style.display='none';
    bar.style.display='block';
    cancel.style.display='none';
 })