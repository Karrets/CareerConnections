$(function() {
    $('#cc-nav').on('click', function(e) {
        if($(e.target).hasClass('active')) return;
        
        $('#cc-nav').find('.btn').removeClass('active');
        $(e.target).addClass('active');
        
        $('.cc-nav-panel').addClass('d-none');
        $($(e.target).data('panel')).removeClass('d-none');
    });

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
});