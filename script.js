"use strict";
//-------------- Contact Section ---------------------
let contact_section = document.getElementById('contact');
let cnt_btn = document.getElementById('cnt_btn');
cnt_btn?.addEventListener('click', () => {
    contact_section.classList.toggle('hide');
});
//-------------- Education Section ---------------------
let education_section = document.getElementById('education');
let edu_btn = document.getElementById('edu_btn');
edu_btn?.addEventListener('click', () => {
    education_section.classList.toggle('hide');
});
//-------------- Expertise Section ---------------------
let skill_section = document.getElementById('expertise');
let expt_btn = document.getElementById('expt_btn');
expt_btn?.addEventListener('click', () => {
    skill_section.classList.toggle('hide');
});
//-------------- Language Section ---------------------
let lang_section = document.getElementById('language');
let lang_btn = document.getElementById('lang_btn');
lang_btn?.addEventListener('click', () => {
    lang_section.classList.toggle('hide');
});
//-------------- Refrence Section ---------------------
let ref_section = document.getElementById('ref');
let ref_btn = document.getElementById('ref_btn');
ref_btn?.addEventListener('click', () => {
    ref_section.classList.toggle('hide');
});
//-------------- Experience Section ---------------------
let exp_section = document.getElementById('experience');
let exp_btn = document.getElementById('exp_btn');
exp_btn?.addEventListener('click', () => {
    exp_section.classList.toggle('hide');
});
//-------------- Print Section ---------------------
let print_btn = document.getElementById('print_btn');
print_btn?.addEventListener('click', () => {
    window.print();
});