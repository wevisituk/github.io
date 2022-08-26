// --- Changing words script --- //
count = 0;
var words = ["risky", "stressful", "exhausting", "scary", "hard", "expensive", "tough", "worrying", "frustrating"];

setInterval(function() {
    count++;
    document.getElementById("word").innerHTML = words[count % words.length];
}, 1000);
// --- End Changing words script --- //

// --- Plan for each button --- //
function fillPromotion() {
    document.getElementById("subject").value = "I am interested in your Promotion plan!";
}

function fillRegular() {
    document.getElementById("subject").value = "I am interested in your Regular plan!";
}

function fillDeluxe() {
    document.getElementById("subject").value = "I am interested in your Deluxe plan!";
}
// --- End Plan for each button --- //

// --- End Plan for each button --- //
function includeTermsAndConditions() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        elmnt.innerHTML = this.responseText;
                    }
                    if (this.status == 404) {
                        elmnt.innerHTML = "Page not found.";
                    }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeTermsAndConditions();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}

// --- FORM scripts --- //
(function () {
    "use strict";

    let forms = document.querySelectorAll('.php-email-form');

    forms.forEach( function(e) {
        e.addEventListener('submit', function(event) {
            event.preventDefault();

            let thisForm = this;
            let action = thisForm.getAttribute('action');

            if( ! action ) {
                displayError(thisForm, 'The form action property is not set!')
                return;
            }
            thisForm.querySelector('.loading').classList.add('d-block');
            thisForm.querySelector('.error-message').classList.remove('d-block');
            thisForm.querySelector('.sent-message').classList.remove('d-block');

            let formData = new FormData( thisForm );

            submit(thisForm, action, formData);
        });
    });

    function submit(thisForm, action, formData) {
        fetch(action, {
            method: 'POST',
            body: formData,
            headers: {'X-Requested-With': 'XMLHttpRequest'}
        })
            .then(data => {
                thisForm.querySelector('.loading').classList.remove('d-block');
                thisForm.querySelector('.sent-message').classList.add('d-block');
                thisForm.reset();
            })
            .catch((error) => {
                displayError(thisForm, error);
            });
    }

    function displayError(thisForm, error) {
        thisForm.querySelector('.loading').classList.remove('d-block');
        thisForm.querySelector('.error-message').innerHTML = error;
        thisForm.querySelector('.error-message').classList.add('d-block');
    }

})();
// --- End FORM scripts --- //
