$(function(){

  function increHTML(user){
    var html =`
              <div class="chat-group-user clearfix incre">
                <p class="chat-group-user__name">${user.name}</p>
                <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
              </div>
    `
    return html
  }

  function add(name,id){
    var html = `
              <div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                <input name='group[user_ids][]' type='hidden' value="${id}">
                <p class='chat-group-user__name'>${name}</p>
                <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
              </div>
    `
    return html
  }



  $("#user-search-field").on("keyup",function(){
    var input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url:'/users',
      data: {keyword: input},
      dataType: 'json'
    })
    .done(function(data){
      $('#user-search-result').empty();
      data.forEach(function(user){
      var html = increHTML(user);
      $('#user-search-result').append(html);
      })
    })
    .fail(function(){
    alert('ユーザー検索に失敗しました')
    });
  });




  $('#user-search-result').on('click','.user-search-add.chat-group-user__btn.chat-group-user__btn--add' , function(){
    name = this.dataset.userName
    id = this.dataset.userId
    incre = add(name,id)
    $('.incre').remove();
    $('#chat-group-users').append(incre)
  })

  $('#chat-group-users').on('click','.js-remove-btn',function(){
    $(this).parent().remove();
  })


});

