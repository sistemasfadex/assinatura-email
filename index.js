function set_user_information() {
  let nameNewAdd = document.querySelector("#name_box").value;
  let jobnameNewAdd = document.querySelector("#jobname_box").value;
  let emailNewAdd = document.querySelector("#email_box").value;
  if (nameNewAdd != "" && jobnameNewAdd != "" && emailNewAdd != "") {
    document.getElementById("person_name").innerHTML = `${nameNewAdd}<span><br></span>`;
    document.getElementById("person_jobname").innerHTML = jobnameNewAdd;
    document.getElementById("person_email").innerHTML = emailNewAdd;
    document.querySelector("#person_email").href = `mailto:${emailNewAdd}`;
  } else {
    alert("Por favor, preencha todos os campos");
  }
}
function delete_user_information() {
  document.querySelector("#name_box").value = "";
  document.querySelector("#jobname_box").value = "";
  document.querySelector("#email_box").value = "";
}

var Tabela = {
  selecionarTabela: function (el) {
    var body = document.body, range, sel;
    if (document.createRange && window.getSelection) {
      range = document.createRange();
      sel = window.getSelection();
      sel.removeAllRanges();
      try {
        range.selectNodeContents(el);
        sel.addRange(range);
      } catch (e) {
        range.selectNode(el);
        sel.addRange(range);
      }
    } else if (body.createTextRange) {
      range = body.createTextRange();
      range.moveToElementText(el);
      range.select();
    }
    try {
      document.execCommand('copy');
      range.blur();
    } catch (error) {
      // Exceção aqui
    }
  }
}

window.onload = function () {
  var selecionaTabelaBtn = document.querySelector("#table_box_button_copy");
  var tabelaDeDados = document.querySelector("#main_table");
  // Seleciona a tabela no clique do botão
  selecionaTabelaBtn.addEventListener("click", function () {
    Tabela.selecionarTabela(tabelaDeDados);
  });
}