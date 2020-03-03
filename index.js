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

function showModuleInfo() {
    $('#module').removeClass('hidden-gone');
    $('#materials').addClass('hidden-gone');
}

function showMaterialsInfo() {
    $('#module').addClass('hidden-gone');
    $('#materials').removeClass('hidden-gone');
}

$('.upload-icon').mouseenter(function() {
    $('.upload-icon').attr('src', './resources/upload-hover.png');
});

$('.upload-icon').mouseleave(function() {
    $('.upload-icon').attr('src', './resources/upload.png');
});