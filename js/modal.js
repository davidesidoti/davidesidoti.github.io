$(window).ready(function (){
    /* vega-10-31-21 */
    var vega_10_31_21_modal = document.getElementById("vega-10-31-21-modal");

    var vega_10_31_21_img = document.getElementById("vega-10-31-21-img");
    var vega_10_31_21_content = document.getElementById("vega-10-31-21-content");
    var vega_10_31_21_caption = document.getElementById("vega-10-31-21-caption");
    vega_10_31_21_img.onclick = function () {
        vega_10_31_21_modal.style.display = "block";
        vega_10_31_21_content.src = this.src;
        vega_10_31_21_caption.innerHTML = this.alt;
    }
    /* vega-10-31-21 */

    /* andromeda-10-26-21 */
    var andromeda_10_26_21_modal = document.getElementById("andromeda-10-26-21-modal");

    var andromeda_10_26_21_img = document.getElementById("andromeda-10-26-21-img");
    var andromeda_10_26_21_img01 = document.getElementById("andromeda-10-26-21-img01");
    var andromeda_10_26_21_caption = document.getElementById("andromeda-10-26-21-caption");
    andromeda_10_26_21_img.onclick = function () {
        andromeda_10_26_21_modal.style.display = "block";
        andromeda_10_26_21_img01.src = this.src;
        andromeda_10_26_21_caption.innerHTML = this.alt;
    }
    /* andromeda-10-26-21 */

    var span = document.getElementById("modal-closer");

    span.onclick = function () {
        andromeda_10_26_21_modal.style.display = "none";
    }
});