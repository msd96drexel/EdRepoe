$(".browse-entry").mouseenter(function() {
    let id = $(this).attr('id');
    $(`#${id} .ellipsis`).removeClass('hidden');
});

$(".browse-entry").mouseleave(function() {
    let id = $(this).attr('id');
    $(`#${id} .ellipsis`).addClass('hidden');
});

$(".ellipsis").click(function() {
    let id = $(this).attr('id');
    $(`#${id} .modal`).removeClass('hidden');
    $(`#${id} .modal`).focus();
});

$(".modal").blur(function() {
    $(".modal").addClass('hidden');
});