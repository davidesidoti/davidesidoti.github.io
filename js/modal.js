$(window).ready(function (){
    /* andromeda-11-02-21 */
    var andromeda_11_02_21_modal = document.getElementsByClassName("andromeda-11-02-21-modal")[0];

    var andromeda_11_02_21_img = document.getElementsByClassName("andromeda-11-02-21-img")[0];
    var andromeda_11_02_21_img01 = document.getElementsByClassName("andromeda-11-02-21-img01")[0];
    var andromeda_11_02_21_caption = document.getElementsByClassName("andromeda-11-02-21-caption")[0];
    andromeda_11_02_21_img.onclick = function () {
        andromeda_11_02_21_modal.style.display = "block";
        andromeda_11_02_21_img01.src = this.src;
        andromeda_11_02_21_caption.innerHTML = this.alt;
    }

    var span = document.getElementsByClassName("vega-10-31-21-closer")[0];

    span.onclick = function () {
        vega_10_31_21_modal.style.display = "none";
    }
    /* andromeda-11-02-21 */

    /* vega-10-31-21 */
    var vega_10_31_21_modal = document.getElementsByClassName("vega-10-31-21-modal")[0];

    var vega_10_31_21_img = document.getElementsByClassName("vega-10-31-21-img")[0];
    var vega_10_31_21_img01 = document.getElementsByClassName("vega-10-31-21-img01")[0];
    var vega_10_31_21_caption = document.getElementsByClassName("vega-10-31-21-caption")[0];
    vega_10_31_21_img.onclick = function () {
        vega_10_31_21_modal.style.display = "block";
        vega_10_31_21_img01.src = this.src;
        vega_10_31_21_caption.innerHTML = this.alt;
    }

    var span = document.getElementsByClassName("vega-10-31-21-closer")[0];

    span.onclick = function () {
        vega_10_31_21_modal.style.display = "none";
    }
    /* vega-10-31-21 */

    /* andromeda-10-26-21 */
    var andromeda_10_26_21_modal = document.getElementsByClassName("andromeda-10-26-21-modal")[0];

    var andromeda_10_26_21_img = document.getElementsByClassName("andromeda-10-26-21-img")[0];
    var andromeda_10_26_21_img01 = document.getElementsByClassName("andromeda-10-26-21-img01")[0];
    var andromeda_10_26_21_caption = document.getElementsByClassName("andromeda-10-26-21-caption")[0];
    andromeda_10_26_21_img.onclick = function () {
        andromeda_10_26_21_modal.style.display = "block";
        andromeda_10_26_21_img01.src = this.src;
        andromeda_10_26_21_caption.innerHTML = this.alt;
    }

    var span = document.getElementsByClassName("andromeda-10-26-21-closer")[0];

    span.onclick = function () {
        andromeda_10_26_21_modal.style.display = "none";
    }
    /* andromeda-10-26-21 */
});