/* ===================================================
 * widgetModal.js v1.0.0
 * ===================================================
 * Copyright 2012 Antoine DARCHE.
 * ===================================================
 */

document.write('<div class="modal fade" id="myModal">');
document.write('<div class="modal-dialog">');
document.write('<div class="modal-content">');
document.write('<div class="modal-header">');
document.write('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
document.write('<h4 class="modal-title">Modal title</h4>');
document.write('</div>');
document.write('<div class="modal-body">');
document.write('<p>One fine body&hellip;</p>');
document.write('</div>');
document.write('<div class="modal-footer">');
document.write('<button class="btn" data-dismiss="modal" aria-hidden="true" onfocus="this.blur();">Fermer</button>');
document.write('</div>');
document.write('</div><!-- /.modal-content -->');
document.write('</div><!-- /.modal-dialog -->');
document.write('</div><!-- /.modal -->');

function widget_modal() {

    this.title      = '';
    this.body      = '';
    this.modal_id = $('#myModal');

    // Function open
    this.open = function()
    {
        this.modal_id.find('.modal-title').html(this.title);
        this.modal_id.find('.modal-body').html(this.body);
        this.modal_id.modal({
            show:'hidden'
        });
    }
}