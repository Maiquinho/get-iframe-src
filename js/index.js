/**
 * 
 * The input element to execute RegEx code 
 * 
*/

const inputDataValue = document.querySelector('[data-action="get-iframe-src"]');


/**
 * 
 * The main function
 * 
*/

function getIframeSrc(string) {
    return string.replace(/<iframe[^>]*src=[\"|']([^'\"]+)[\"|'][^>]*><\/iframe>/i, "\$1");
}


/**
 * 
 * The copy text function
 * 
*/

function copyInputValue() {
    const inputValue = inputDataValue.value;
    const message = document.querySelector('#msg');


    if (inputValue != '' && inputValue.includes('http')) {

        navigator.clipboard
            .writeText(inputValue)
            .then(() => {

                if (message) {
                    setTimeout(() => {
                        message.innerHTML = 'Text copied';
                        setTimeout(() => {
                            message.innerHTML = '';
                        }, 1500);
                    }, 100);
                }

            })
            .catch(() => {
                alert("Something is wrong, try again later!");
            });

    } else {

        setTimeout(() => {

            if (message) {
                message.innerHTML = 'Error, invalid content!';
                setTimeout(() => {
                    message.innerHTML = '';
                }, 1500);
            }

        }, 100);

    }

}


/**
 * 
 * The input element eventListener executing the RegEx function
 * 
*/

inputDataValue.addEventListener('input', (e) => {
    e.target.value = getIframeSrc(e.target.value);
    copyInputValue();
});