function botaoFechar(li)
{
    let span = document.createElement("SPAN")
    let txt = document.createElement("text")
    txt.textContent = "\u00D7"

    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    span.onclick = () => span.parentElement.style.display = "none";

}

document.querySelectorAll('li').forEach(botaoFechar);

document.querySelector('ul').addEventListener('click', (e) => {

    if(e.target.tagName === 'LI')
        e.target.classList.toggle('checked')
})

function addTarefa()
{
    let li = document.createElement('LI')
    let tarefa = document.form_main.task.value
    let caixaTarefa = document.createTextNode(tarefa) // pra criar sempre embaixo da ultima tag
    
    li.appendChild(caixaTarefa) // Texto foi criado e entra como lista
    document.querySelector('ul').appendChild(li) // Essa lista desordenada vai receber o elemento filho
    document.form_main.task.value = "" // Após limpa o input

    botaoFechar(li); // Chama novamente a função

}





// $( document ).ready(function() {
    
//     "use strict";
    
//     var todo = function() { 
//         $('.todo-list .todo-item input').click(function() {
//         if($(this).is(':checked')) {
//             $(this).parent().parent().parent().toggleClass('complete');
//         } else {
//             $(this).parent().parent().parent().toggleClass('complete');
//         }
//     });
    
//     $('.todo-nav .all-task').click(function() {
//         $('.todo-list').removeClass('only-active');
//         $('.todo-list').removeClass('only-complete');
//         $('.todo-nav li.active').removeClass('active');
//         $(this).addClass('active');
//     });
    
//     $('.todo-nav .active-task').click(function() {
//         $('.todo-list').removeClass('only-complete');
//         $('.todo-list').addClass('only-active');
//         $('.todo-nav li.active').removeClass('active');
//         $(this).addClass('active');
//     });
    
//     $('.todo-nav .completed-task').click(function() {
//         $('.todo-list').removeClass('only-active');
//         $('.todo-list').addClass('only-complete');
//         $('.todo-nav li.active').removeClass('active');
//         $(this).addClass('active');
//     });
    
//     $('#uniform-all-complete input').click(function() {
//         if($(this).is(':checked')) {
//             $('.todo-item .checker span:not(.checked) input').click();
//         } else {
//             $('.todo-item .checker span.checked input').click();
//         }
//     });
    
//     $('.remove-todo-item').click(function() {
//         $(this).parent().remove();
//     });
//     };
    
//     todo();
    
//     $(".add-task").keypress(function (e) {
//         if ((e.which == 13)&&(!$(this).val().length == 0)) {
//             $('<div class="todo-item"><div class="checker"><span class=""><input type="checkbox"></span></div> <span>' + $(this).val() + '</span> <a href="javascript:void(0);" class="float-right remove-todo-item"><i class="icon-close"></i></a></div>').insertAfter('.todo-list .todo-item:last-child');
//             $(this).val('');
//         } else if(e.which == 13) {
//             alert('Please enter new task');
//         }
//         $(document).on('.todo-list .todo-item.added input').click(function() {
//             if($(this).is(':checked')) {
//                 $(this).parent().parent().parent().toggleClass('complete');
//             } else {
//                 $(this).parent().parent().parent().toggleClass('complete');
//             }
//         });
//         $('.todo-list .todo-item.added .remove-todo-item').click(function() {
//             $(this).parent().remove();
//         });
//     });
// });