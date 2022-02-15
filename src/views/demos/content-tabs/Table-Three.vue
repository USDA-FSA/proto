<template>
  <div>

    <div class="fsa-field">
      <label class="fsa-field__label" for="UNIQUE-ID-select-state">State <span class="fsa-field__label-desc">Required</span></label>
      <select class="fsa-select fsa-field__item fsa-select--block" id="UNIQUE-ID-select-state" aria-describedby="UNIQUE-ID-select-state-help" aria-required="true" name="UNIQUE-ID-select-state">
        <option value="">Select State</option>
        <option value="06">California (A)</option>
        <option value="12">Florida (A)</option>
        <option value="45">South Carolina (A)</option>
        <option value="46">South Dakota (A)</option>
        <option value="53">Washington (A)</option>
        <option value="01">Alabama</option>
        <option value="02">Alaska</option>
        <option value="60">American Samoa</option>
        <option value="04">Arizona</option>
        <option value="05">Arkansas</option>
        <option value="08">Colorado</option>
        <option value="09">Connecticut</option>
        <option value="10">Delaware</option>
        <option value="11">District of Columbia</option>
        <option value="64">Federated States of Micronesia</option>
        <option value="13">Georgia</option>
        <option value="14">Guam</option>
        <option value="15">Hawaii</option>
        <option value="16">Idaho</option>
        <option value="17">Illinois</option>
        <option value="18">Indiana</option>
        <option value="19">Iowa</option>
        <option value="20">Kansas</option>
        <option value="21">Kentucky</option>
        <option value="22">Louisiana</option>
        <option value="23">Maine</option>
        <option value="24">Maryland</option>
        <option value="25">Massachusetts</option>
        <option value="26">Michigan</option>
        <option value="27">Minnesota</option>
        <option value="28">Mississippi</option>
        <option value="29">Missouri</option>
        <option value="30">Montana</option>
        <option value="31">Nebraska</option>
        <option value="32">Nevada</option>
        <option value="33">New Hampshire</option>
        <option value="34">New Jersey</option>
        <option value="35">New Mexico</option>
        <option value="36">New York</option>
        <option value="37">North Carolina</option>
        <option value="38">North Dakota</option>
        <option value="69">Northern Mariana Islands</option>
        <option value="39">Ohio</option>
        <option value="40">Oklahoma</option>
        <option value="41">Oregon</option>
        <option value="42">Pennsylvania</option>
        <option value="72">Puerto Rico</option>
        <option value="44">Rhode Island</option>
        <option value="47">Tennessee</option>
        <option value="48">Texas</option>
        <option value="49">Utah</option>
        <option value="50">Vermont</option>
        <option value="52">Virgin Islands of the U.S.</option>
        <option value="51">Virginia</option>
        <option value="54">West Virginia</option>
        <option value="55">Wisconsin</option>
        <option value="56">Wyoming</option>
      </select>
      <!--<span class="fsa-field__help" id="UNIQUE-ID-select-state-help"></span>-->
    </div>
    <div class="fsa-field">
      <label class="fsa-field__label" for="UNIQUE-ID-select-county">County <span class="fsa-field__label-desc">Required</span></label>
      <select class="fsa-select fsa-field__item fsa-select--block" id="UNIQUE-ID-select-county" aria-describedby="UNIQUE-ID-select-county-help" aria-required="true" name="UNIQUE-ID-select-county">
        <option value="">Select County</option>
        <option value="043">Mariposa (A)</option>
        <option value="047">Merced (A)</option>
        <option value="001">Alameda</option>
        <option value="003">Alpine</option>
        <option value="005">Amador</option>
        <option value="007">Butte</option>
        <option value="009">Calaveras</option>
        <option value="011">Colusa</option>
        <option value="013">Contra Costa</option>
        <option value="015">Del Norte</option>
        <option value="017">El Dorado</option>
        <option value="019">Fresno</option>
        <option value="021">Glenn</option>
        <option value="023">Humboldt</option>
        <option value="025">Imperial</option>
        <option value="027">Inyo</option>
        <option value="029">Kern</option>
        <option value="031">Kings</option>
        <option value="033">Lake</option>
        <option value="035">Lassen</option>
        <option value="037">Los Angeles</option>
        <option value="039">Madera</option>
        <option value="041">Marin</option>
        <option value="045">Mendocino</option>
        <option value="049">Modoc</option>
        <option value="051">Mono</option>
        <option value="053">Monterey</option>
        <option value="055">Napa</option>
        <option value="057">Nevada</option>
        <option value="059">Orange</option>
        <option value="061">Placer</option>
        <option value="063">Plumas</option>
        <option value="065">Riverside</option>
        <option value="067">Sacramento</option>
        <option value="069">San Benito</option>
        <option value="071">San Bernardino</option>
        <option value="073">San Diego</option>
        <option value="077">San Joaquin</option>
        <option value="079">San Luis Obispo</option>
        <option value="081">San Mateo</option>
        <option value="083">Santa Barbara</option>
        <option value="085">Santa Clara</option>
        <option value="087">Santa Cruz</option>
        <option value="089">Shasta</option>
        <option value="091">Sierra</option>
        <option value="093">Siskiyou</option>
        <option value="095">Solano</option>
        <option value="097">Sonoma</option>
        <option value="099">Stanislaus</option>
        <option value="101">Sutter</option>
        <option value="103">Tehama</option>
        <option value="105">Trinity</option>
        <option value="107">Tulare</option>
        <option value="109">Tuolumne</option>
        <option value="111">Ventura</option>
        <option value="113">Yolo</option>
        <option value="115">Yuba</option>
      </select>
      <!--<span class="fsa-field__help" id="UNIQUE-ID-select-program-year-help">Instructional message here</span>-->
    </div>


    <div class="fsa-field">
      <label class="fsa-field__label" for="UNIQUE-ID-select-source">Source of Quantity <span class="fsa-field__label-desc">Required</span></label>
      <select onchange="setSource(this.value)" class="fsa-select fsa-field__item " id="UNIQUE-ID-select-source" aria-describedby="UNIQUE-ID-select-source-help" aria-required="true" name="UNIQUE-ID-select-source">
        <option value="x">Select Source</option>
        <option value="source-certified">Certified</option>
        <option value="source-service">Measurement Service</option>
        <option value="source-evidence">Production Evidence</option>
      </select>
      <!--<span class="fsa-field__help" id="UNIQUE-ID-select-source-help">Instructional message here</span>-->
    </div>

    <div class="fsa-m-t--l fsa-level">
      <button id="modal-add-update" role="button" type="button" class="fsa-btn fsa-btn--primary">Search</button>
    </div>
    
  </div>
</template>