$(function(){


  function buildHTML(message){
    var image = message.image ? `<img class="lower-message__image" src="${message.image}">` : "";

      var html = `
                  <div class="message" user_id=">
                    <div class="upper-message">
                      <div class="upper-message__user-name">
                        ${message.user_name}
                      </div>
                      <div class="upper-message__date">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="lower-meesage">
                      ${image}
                      <p class="lower-message__content">
                        ${message.content}
                      </p>
                    </div>
                  </div>`
    return html;
  }




  $('#new_message').on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');

     $('.submit-btn').removeAttr('data-disable-with');

    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html)
      $('.messages').animate({scrollTop: 1000000},'slow')
      // $('#message_content')[0].reset('');
      $('#message_content').val('')
    })
    .fail(function(){
    alert('自動更新に失敗しました')
    })
  });
});
