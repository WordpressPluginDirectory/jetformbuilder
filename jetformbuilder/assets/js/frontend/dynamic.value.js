(()=>{"use strict";const{CalculatedFormula:t,ConditionsList:e}=JetFormBuilderAbstract;function s(){}s.prototype={to_set:"",prevResult:null,prevValue:null,input:null,frequency:"",set_on_empty:!1,formulas:[],isSupported:t=>!0,observe({to_set:t,conditions:s=[],set_on_empty:o=!1,frequency:r="on_change"},n){this.input=n,this.frequency=r,this.set_on_empty=o,this.prevResult=null,this.prevValue=null,this.to_set=t,this.formulas=[],this.observeSetValue(s,n);const a=new e(s,n.root);if(a.conditions?.length)return a.onChangeRelated=()=>this.applyValue(a),a.observe(),void a.onChangeRelated();for(const t of this.formulas){const e=t.setResult.bind(t);t.setResult=()=>{e(),this.applyValue(!1,!0)},t.setResult()}},observeSetValue(e,s){const o=new t(s);o.observe(this.to_set),o.setResult=()=>{this.to_set=""+o.calculate()},o.setResult(),this.formulas.push(o)},applyValue(t,e=null){let s=!1;switch(s=t?t.getResult():e,this.frequency){case"always":this.setValue(s);break;case"on_change":if(this.prevResult===s)break;this.prevResult=s,this.setValue(s);break;case"once":if(!s)break;this.setValue(),t&&(t.onChangeRelated=()=>{}),this.formulas.forEach((t=>t.clearWatchers()))}},setValue(t=!0){t&&(this.set_on_empty?this.input.value.setIfEmpty(this.to_set):this.input.value.current=this.to_set)}};const o=s,{CalculatedFormula:r}=JetFormBuilderAbstract;function n(...t){o.call(this,...t)}n.prototype=Object.create(o.prototype),n.prototype.isSupported=function(t){return t.isArray()},n.prototype.observeSetValue=function(t,e){let s=[];Array.isArray(this.to_set)||(s=this.to_set.split(",").map((t=>t.trim()))),this.to_set={};for(const[t,o]of Object.entries(s)){const s=new r(e);s.observe(o),s.setResult=()=>{this.to_set[t]=""+s.calculate(),this.to_set=Object.values(this.to_set).filter(Boolean)},s.setResult(),this.formulas.push(s)}};const a=n,{CalculatedFormula:u}=JetFormBuilderAbstract;function l(t=""){this.attrName=t}l.prototype={attrName:"",isSupported(t){return t.attrs.hasOwnProperty(this.attrName)},runObserve(t){const e=t.attrs[this.attrName],s=new u(t);s.observe(e.initial),this.observe(e,s)},observe(t,e){e.setResult=()=>{t.value.current=e.calculate()},e.setResult()}};const i=l,{CalculatedFormula:c}=JetFormBuilderAbstract;function p(){this.isSupported=function(t){const[e]=t.nodes;return e.dataset.hasOwnProperty("value")},this.runObserve=function(t){const[e]=t.nodes,s=new c(t);s.observe(e.dataset.value),s.setResult=()=>{t.value.current=s.calculate()},s.setResult()}}p.prototype=Object.create(i.prototype);const h=p,{applyFilters:f}=JetPlugins.hooks;let d=[];const y=t=>{d.length||(d=f("jet.fb.dynamic.value.types",[a,o]));for(const e of d){const s=new e;if(s.isSupported(t))return s}};function v(t,e){let s=[];try{s=JSON.parse(t)}catch(t){return void console.error(t)}for(const t of s)y(e).observe(t,e)}function b(t){const[e]=t.nodes,s=e.closest(".jet-form-builder-row");s&&s.dataset.hasOwnProperty("value")?v(s.dataset.value,t):e.dataset.hasOwnProperty("dynamicValue")&&v(e.dataset.dynamicValue,t);for(const e of function*(t){for(const e of m)e.isSupported(t)&&(yield e)}(t))e.runObserve(t)}const m=[new i("min"),new i("max"),new h],{addAction:_}=JetPlugins.hooks;_("jet.fb.observe.after","jet-form-builder/dynamic-value",(function(t){for(const e of t.getInputs())b(e)}))})();