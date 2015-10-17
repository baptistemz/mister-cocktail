$(document).on('dragenter', '#dropfile', function() {
            $(this).css('border', '3px dashed red');
            return false;
});

$(document).on('dragover', '#dropfile', function(e){
            e.preventDefault();
            e.stopPropagation();
            $(this).css('border', '3px dashed red');
            return false;
});

$(document).on('dragleave', '#dropfile', function(e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).css('border', '3px dashed #BBBBBB');
            return false;
});
$(document).on('drop', '#dropfile', function(e) {
            if(e.originalEvent.dataTransfer){
                       if(e.originalEvent.dataTransfer.files.length) {
                                   // Stop the propagation of the event
                                   e.preventDefault();
                                   e.stopPropagation();
                                   $(this).css('border', '3px dashed green');
                                   // Main function to upload
                                   upload(e.originalEvent.dataTransfer.files);
                       }
            }
            else {
                       $(this).css('border', '3px dashed #BBBBBB');
            }
            return false;
});
