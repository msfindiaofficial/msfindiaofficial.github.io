// custome js
$('#webform-component-donation--recurring-amount').hide();
$('#form_part').hide();
$("#back_btn").click(function() {
    var form_second_part = document.getElementById("form_part");
    var form_first_part = document.getElementById("webform-component-donation");
    if(form_first_part.style.display === "none") {
        form_second_part.style.display = "none";
        form_first_part.style.display = "block";
    } else {
        form_first_part.style.display = "none";
        form_second_part.style.display = "block";
    }
});
$("#donate_now").click(function() {
    // validate if any donation amount is set or not
    if (!$("input[name='donateAmount']:checked").val()) {
        var textVal=document.getElementById('edit-submitted-donation-other-amount1').value;
        if (!textVal.match(/\S/)) 
        {
            var textVal1=document.getElementById('edit-submitted-donation-other-amount').value;
            if (!textVal1.match(/\S/)) 
            {
                alert("Donation amount must be provided");
                return false;
            }else{
                var regex = /^[0-9]+$/;
                var isValid = regex.test(textVal1);
                if (!isValid) {
                    alert("Donation amount should be number only.");
                    return false;
                } else{
                    if(textVal1<500){
                        alert('Donation amount (minimum of INR.500) must be provided');
                        return false;
                    }
                }
            }
        }else{
            var regex = /^[0-9]+$/;
            var isValid = regex.test(textVal);
            if (!isValid) {
                alert("Donation amount should be number only.");
                return false;
            } else{
                if(textVal<1000){
                    alert('Donation amount (minimum of INR.1,000) must be provided');
                    return false;
                }
            }
        }
    }

    var form_second_part = document.getElementById("form_part");
    var form_first_part = document.getElementById("webform-component-donation");
    if(form_second_part.style.display === "none") {
        form_second_part.style.display = "block";
        form_first_part.style.display = "none";
    } else {
        form_first_part.style.display = "block";
        form_second_part.style.display = "none";
    }
});
$("#edit-submitted-donation-recurs-monthly-2").click(function() {
    var x = document.getElementById("webform-component-donation--recurring-amount");
    var y = document.getElementById("webform-component-donation--amount");

    if ($('input[class=donation_value_checked]:checked').length > 0) {
        $("input:radio[class=donation_value_checked]:checked")[0].checked = false;
    }
    document.getElementById('edit-submitted-donation-other-amount').value = '';

    if(x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        y.style.display = "block";
        x.style.display = "none";
    }
});
$("#edit-submitted-donation-recurs-monthly-1").click(function() {
    var x = document.getElementById("webform-component-donation--recurring-amount");
    var y = document.getElementById("webform-component-donation--amount");

    if ($('input[class=donation_value_checked]:checked').length > 0) {
        $("input:radio[class=donation_value_checked]:checked")[0].checked = false;
    }
    document.getElementById('edit-submitted-donation-other-amount1').value = '';
    
    if(y.style.display === "none") {
        y.style.display = "block";
        x.style.display = "none";
    } else {
        x.style.display = "block";
        y.style.display = "none";
    }
});

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
}