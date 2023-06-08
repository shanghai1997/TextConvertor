"use strict";(self.webpackChunkTextConvertor=self.webpackChunkTextConvertor||[]).push([[5023],{5023:(C,m,p)=>{p.r(m),p.d(m,{ion_accordion:()=>b,ion_accordion_group:()=>v});var l=p(8239),a=p(6203),y=p(2923),f=p(1599),h=p(2111);const b=class{constructor(e){var o=this;(0,a.r)(this,e),this.updateListener=()=>this.updateState(!1),this.state=1,this.isNext=!1,this.isPrevious=!1,this.value="ion-accordion-"+_++,this.disabled=!1,this.readonly=!1,this.toggleIcon=y.l,this.toggleIconSlot="end",this.setItemDefaults=()=>{const t=this.getSlottedHeaderIonItem();!t||(t.button=!0,t.detail=!1,void 0===t.lines&&(t.lines="full"))},this.getSlottedHeaderIonItem=()=>{const{headerEl:t}=this;if(!t)return;const n=t.querySelector("slot");return n&&void 0!==n.assignedElements?n.assignedElements().find(r=>"ION-ITEM"===r.tagName):void 0},this.setAria=(t=!1)=>{const n=this.getSlottedHeaderIonItem();if(!n)return;const d=(0,h.g)(n).querySelector("button");!d||d.setAttribute("aria-expanded",`${t}`)},this.slotToggleIcon=()=>{const t=this.getSlottedHeaderIonItem();if(!t)return;const{toggleIconSlot:n,toggleIcon:r}=this;if(t.querySelector(".ion-accordion-toggle-icon"))return;const i=document.createElement("ion-icon");i.slot=n,i.lazy=!1,i.classList.add("ion-accordion-toggle-icon"),i.icon=r,i.setAttribute("aria-hidden","true"),t.appendChild(i)},this.expandAccordion=(t=!1)=>{const{contentEl:n,contentElWrapper:r}=this;t||void 0===n||void 0===r?this.state=4:4!==this.state&&(void 0!==this.currentRaf&&cancelAnimationFrame(this.currentRaf),this.shouldAnimate()?(0,h.r)(()=>{this.state=8,this.currentRaf=(0,h.r)((0,l.Z)(function*(){const d=r.offsetHeight,i=(0,h.t)(n,2e3);n.style.setProperty("max-height",`${d}px`),yield i,o.state=4,n.style.removeProperty("max-height")}))}):this.state=4)},this.collapseAccordion=(t=!1)=>{const{contentEl:n}=this;t||void 0===n?this.state=1:1!==this.state&&(void 0!==this.currentRaf&&cancelAnimationFrame(this.currentRaf),this.shouldAnimate()?this.currentRaf=(0,h.r)((0,l.Z)(function*(){n.style.setProperty("max-height",`${n.offsetHeight}px`),(0,h.r)((0,l.Z)(function*(){const d=(0,h.t)(n,2e3);o.state=2,yield d,o.state=1,n.style.removeProperty("max-height")}))})):this.state=1)},this.shouldAnimate=()=>!("undefined"==typeof window||matchMedia("(prefers-reduced-motion: reduce)").matches||!f.c.get("animated",!0)||this.accordionGroupEl&&!this.accordionGroupEl.animated),this.updateState=function(){var t=(0,l.Z)(function*(n=!1){const r=o.accordionGroupEl,d=o.value;if(!r)return;const i=r.value;if(Array.isArray(i)?i.includes(d):i===d)o.expandAccordion(n),o.isNext=o.isPrevious=!1;else{o.collapseAccordion(n);const s=o.getNextSibling(),u=null==s?void 0:s.value;void 0!==u&&(o.isPrevious=Array.isArray(i)?i.includes(u):i===u);const g=o.getPreviousSibling(),x=null==g?void 0:g.value;void 0!==x&&(o.isNext=Array.isArray(i)?i.includes(x):i===x)}});return function(){return t.apply(this,arguments)}}(),this.getNextSibling=()=>{if(!this.el)return;const t=this.el.nextElementSibling;return"ION-ACCORDION"===(null==t?void 0:t.tagName)?t:void 0},this.getPreviousSibling=()=>{if(!this.el)return;const t=this.el.previousElementSibling;return"ION-ACCORDION"===(null==t?void 0:t.tagName)?t:void 0}}connectedCallback(){var e;const o=this.accordionGroupEl=null===(e=this.el)||void 0===e?void 0:e.closest("ion-accordion-group");o&&(this.updateState(!0),(0,h.a)(o,"ionChange",this.updateListener))}disconnectedCallback(){const e=this.accordionGroupEl;e&&(0,h.b)(e,"ionChange",this.updateListener)}componentDidLoad(){this.setItemDefaults(),this.slotToggleIcon(),(0,h.r)(()=>{this.setAria(4===this.state||8===this.state)})}toggleExpanded(){const{accordionGroupEl:e,value:o,state:t}=this;e&&e.requestAccordionToggle(o,1===t||2===t)}render(){const{disabled:e,readonly:o}=this,t=(0,f.b)(this),n=4===this.state||8===this.state,r=n?"header expanded":"header",d=n?"content expanded":"content";return this.setAria(n),(0,a.h)(a.H,{class:{[t]:!0,"accordion-expanding":8===this.state,"accordion-expanded":4===this.state,"accordion-collapsing":2===this.state,"accordion-collapsed":1===this.state,"accordion-next":this.isNext,"accordion-previous":this.isPrevious,"accordion-disabled":e,"accordion-readonly":o,"accordion-animated":f.c.getBoolean("animated",!0)}},(0,a.h)("div",{onClick:()=>this.toggleExpanded(),id:"header",part:r,"aria-controls":"content",ref:i=>this.headerEl=i},(0,a.h)("slot",{name:"header"})),(0,a.h)("div",{id:"content",part:d,role:"region","aria-labelledby":"header",ref:i=>this.contentEl=i},(0,a.h)("div",{id:"content-wrapper",ref:i=>this.contentElWrapper=i},(0,a.h)("slot",{name:"content"}))))}static get delegatesFocus(){return!0}get el(){return(0,a.i)(this)}};let _=0;b.style={ios:":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-expanding) #content-wrapper{overflow:auto}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}:host(.accordion-next) ::slotted(ion-item[slot=header]){--border-width:0.55px 0px 0.55px 0px}",md:":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-expanding) #content-wrapper{overflow:auto}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}"};const v=class{constructor(e){(0,a.r)(this,e),this.ionChange=(0,a.e)(this,"ionChange",7),this.animated=!0,this.disabled=!1,this.readonly=!1,this.expand="compact"}valueChanged(){const{value:e,multiple:o}=this;!o&&Array.isArray(e)?this.value=e[0]:this.ionChange.emit({value:this.value})}disabledChanged(){var e=this;return(0,l.Z)(function*(){const{disabled:o}=e,t=yield e.getAccordions();for(const n of t)n.disabled=o})()}readonlyChanged(){var e=this;return(0,l.Z)(function*(){const{readonly:o}=e,t=yield e.getAccordions();for(const n of t)n.readonly=o})()}onKeydown(e){var o=this;return(0,l.Z)(function*(){const t=document.activeElement;if(!t||!t.closest('ion-accordion [slot="header"]'))return;const r="ION-ACCORDION"===t.tagName?t:t.closest("ion-accordion");if(!r||r.closest("ion-accordion-group")!==o.el)return;const i=yield o.getAccordions(),c=i.findIndex(u=>u===r);if(-1===c)return;let s;"ArrowDown"===e.key?s=o.findNextAccordion(i,c):"ArrowUp"===e.key?s=o.findPreviousAccordion(i,c):"Home"===e.key?s=i[0]:"End"===e.key&&(s=i[i.length-1]),void 0!==s&&s!==t&&s.focus()})()}componentDidLoad(){var e=this;return(0,l.Z)(function*(){e.disabled&&e.disabledChanged(),e.readonly&&e.readonlyChanged()})()}requestAccordionToggle(e,o){var t=this;return(0,l.Z)(function*(){const{multiple:n,value:r,readonly:d,disabled:i}=t;if(!d&&!i)if(o)if(n){const c=null!=r?r:[],s=Array.isArray(c)?c:[c];void 0===s.find(g=>g===e)&&void 0!==e&&(t.value=[...s,e])}else t.value=e;else if(n){const c=null!=r?r:[],s=Array.isArray(c)?c:[c];t.value=s.filter(u=>u!==e)}else t.value=void 0})()}findNextAccordion(e,o){const t=e[o+1];return void 0===t?e[0]:t}findPreviousAccordion(e,o){const t=e[o-1];return void 0===t?e[e.length-1]:t}getAccordions(){var e=this;return(0,l.Z)(function*(){return Array.from(e.el.querySelectorAll(":scope > ion-accordion"))})()}render(){const{disabled:e,readonly:o,expand:t}=this,n=(0,f.b)(this);return(0,a.h)(a.H,{class:{[n]:!0,"accordion-group-disabled":e,"accordion-group-readonly":o,[`accordion-group-expand-${t}`]:!0},role:"presentation"},(0,a.h)("slot",null))}get el(){return(0,a.i)(this)}static get watchers(){return{value:["valueChanged"],disabled:["disabledChanged"],readonly:["readonlyChanged"]}}};v.style={ios:":host{display:block}:host(.accordion-group-expand-inset){margin-left:16px;margin-right:16px;margin-top:16px;margin-bottom:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.accordion-group-expand-inset){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){border-bottom:none}",md:":host{display:block}:host(.accordion-group-expand-inset){margin-left:16px;margin-right:16px;margin-top:16px;margin-bottom:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.accordion-group-expand-inset){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}:host(.accordion-group-expand-inset) ::slotted(ion-accordion){-webkit-box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;border-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}:host-context([dir=rtl]):host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous),:host-context([dir=rtl]).accordion-group-expand-inset ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}:host-context([dir=rtl]):host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next),:host-context([dir=rtl]).accordion-group-expand-inset ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion):first-of-type{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}"}}}]);