webpackJsonp([1],{"+h1B":function(n,l,e){"use strict";var t=e("/oeL"),o=e("aR8+"),u=e("wQAS"),i=e("q4dy"),r=e("qbdv"),a=e("fc+i"),s=e("CPp0"),d=e("7fc5"),p=(e.n(d),e("gPcP"));e.n(p);e.d(l,"a",function(){return c});var c=t["ɵcmf"](o.a,[u.a],function(n){return t["ɵmod"]([t["ɵmpd"](512,t.ComponentFactoryResolver,t["ɵCodegenComponentFactoryResolver"],[[8,[i.a]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["ɵmpd"](5120,t.LOCALE_ID,t["ɵm"],[[3,t.LOCALE_ID]]),t["ɵmpd"](4608,r.NgLocalization,r.NgLocaleLocalization,[t.LOCALE_ID]),t["ɵmpd"](4608,t.Compiler,t.Compiler,[]),t["ɵmpd"](5120,t.APP_ID,t["ɵf"],[]),t["ɵmpd"](5120,t.IterableDiffers,t["ɵk"],[]),t["ɵmpd"](5120,t.KeyValueDiffers,t["ɵl"],[]),t["ɵmpd"](4608,a.b,a.c,[a.d]),t["ɵmpd"](6144,t.Sanitizer,null,[a.b]),t["ɵmpd"](4608,a.e,a.f,[]),t["ɵmpd"](5120,a.g,function(n,l,e,t){return[new a.h(n),new a.i(l),new a.j(e,t)]},[a.d,a.d,a.d,a.e]),t["ɵmpd"](4608,a.k,a.k,[a.g,t.NgZone]),t["ɵmpd"](135680,a.l,a.l,[a.d]),t["ɵmpd"](4608,a.m,a.m,[a.k,a.l]),t["ɵmpd"](6144,t.RendererFactory2,null,[a.m]),t["ɵmpd"](6144,a.n,null,[a.l]),t["ɵmpd"](4608,t.Testability,t.Testability,[t.NgZone]),t["ɵmpd"](4608,a.o,a.o,[a.d]),t["ɵmpd"](4608,a.p,a.p,[a.d]),t["ɵmpd"](4608,s.BrowserXhr,s.BrowserXhr,[]),t["ɵmpd"](4608,s.ResponseOptions,s.BaseResponseOptions,[]),t["ɵmpd"](5120,s.XSRFStrategy,s["ɵb"],[]),t["ɵmpd"](4608,s.XHRBackend,s.XHRBackend,[s.BrowserXhr,s.ResponseOptions,s.XSRFStrategy]),t["ɵmpd"](4608,s.RequestOptions,s.BaseRequestOptions,[]),t["ɵmpd"](5120,s.Http,s["ɵc"],[s.XHRBackend,s.RequestOptions]),t["ɵmpd"](4608,d.ImageService,d.ImageService,[s.Http]),t["ɵmpd"](512,r.CommonModule,r.CommonModule,[]),t["ɵmpd"](1024,t.ErrorHandler,a.q,[]),t["ɵmpd"](1024,t.APP_INITIALIZER,function(n,l){return[a.r(n,l)]},[[2,a.s],[2,t.NgProbeToken]]),t["ɵmpd"](512,t.ApplicationInitStatus,t.ApplicationInitStatus,[[2,t.APP_INITIALIZER]]),t["ɵmpd"](131584,t["ɵe"],t["ɵe"],[t.NgZone,t["ɵConsole"],t.Injector,t.ErrorHandler,t.ComponentFactoryResolver,t.ApplicationInitStatus]),t["ɵmpd"](2048,t.ApplicationRef,null,[t["ɵe"]]),t["ɵmpd"](512,t.ApplicationModule,t.ApplicationModule,[t.ApplicationRef]),t["ɵmpd"](512,a.t,a.t,[[3,a.t]]),t["ɵmpd"](512,s.HttpModule,s.HttpModule,[]),t["ɵmpd"](512,p.ImageUploadModule,p.ImageUploadModule,[]),t["ɵmpd"](512,o.a,o.a,[])])})},1:function(n,l,e){n.exports=e("cDNt")},"1tl3":function(n,l,e){"use strict";var t=e("/oeL"),o=e("7fc5"),u=function(){function n(n,l){this.src=n,this.file=l,this.pending=!1}return n}();l.FileHolder=u;var i=function(){function n(n){var l=this;this.imageService=n,this.files=[],this.fileCounter=0,this.fileOver=!1,this.showFileTooLargeMessage=!1,this.buttonCaption="Select Images",this.dropBoxMessage="Drop your images here!",this.max=100,this.preview=!0,this.withCredentials=!1,this.removed=new t.EventEmitter,this.uploadStateChanged=new t.EventEmitter,this.uploadFinished=new t.EventEmitter,this.pendingFilesCounter=0,this.onFileOver=function(n){return l.fileOver=n},this.countRemainingSlots=function(){return l.max-l.fileCounter}}return n.prototype.ngOnInit=function(){this.fileTooLargeMessage||(this.fileTooLargeMessage="An image was too large and was not uploaded."+(this.maxFileSize?" The maximum file size is "+this.maxFileSize/1024+"KiB.":"")),this.supportedExtensions=this.supportedExtensions?this.supportedExtensions.map(function(n){return"image/"+n}):["image/*"]},n.prototype.deleteAll=function(){var n=this;this.files.forEach(function(l){return n.removed.emit(l)}),this.files=[],this.fileCounter=0,this.inputElement.nativeElement.value=""},n.prototype.deleteFile=function(n){var l=this.files.indexOf(n);this.files.splice(l,1),this.fileCounter--,this.inputElement.nativeElement.value="",this.removed.emit(n)},n.prototype.onFileChange=function(n){var l=this.countRemainingSlots(),e=n.length>l?l:n.length;this.url&&0!=e&&this.uploadStateChanged.emit(!0),this.fileCounter+=e,this.showFileTooLargeMessage=!1,this.uploadFiles(n,e)},n.prototype.onResponse=function(n,l){l.serverResponse=n,l.pending=!1,this.uploadFinished.emit(l),0==--this.pendingFilesCounter&&this.uploadStateChanged.emit(!1)},n.prototype.uploadFiles=function(n,l){for(var e=this,t=this,o=0;o<l;o++)!function(l){var o=n[l];if(t.maxFileSize&&o.size>t.maxFileSize)return t.showFileTooLargeMessage=!0,"continue";document.createElement("img").src=window.URL.createObjectURL(o);var i=new FileReader;i.addEventListener("load",function(n){var l=new u(n.target.result,o);e.uploadSingleFile(l),e.files.push(l)},!1),i.readAsDataURL(o)}(o)},n.prototype.uploadSingleFile=function(n){var l=this;this.url?(this.pendingFilesCounter++,n.pending=!0,this.imageService.postImage(this.url,n.file,this.headers,this.partName,this.withCredentials).subscribe(function(e){return l.onResponse(e,n)},function(e){l.onResponse(e,n),l.deleteFile(n)})):this.uploadFinished.emit(n)},n}();i.decorators=[{type:t.Component,args:[{selector:"image-upload",template:'\n    <div class="image-upload"\n         fileDrop\n         [accept]="supportedExtensions"\n         (fileOver)="onFileOver($event)"\n         (fileDrop)="onFileChange($event)"\n         [ngClass]="{\'file-is-over\': fileOver}"\n    >\n      <div class="file-upload hr-inline-group">\n        <label class="upload button">\n          <span [innerText]="buttonCaption"></span>\n          <input\n            type="file"\n            [accept]="supportedExtensions"\n            multiple (change)="onFileChange(input.files)"\n            #input>\n        </label>\n        <label *ngIf="fileCounter > 0" class="clear button" (click)="deleteAll()">\n          <span [innerText]="\'Clear\'"></span>\n        </label>\n        <div class="drag-box-message" [innerText]="dropBoxMessage"></div>\n      </div>\n\n      <p class="file-too-large" *ngIf="showFileTooLargeMessage" [innerText]="fileTooLargeMessage"></p>\n\n      <div *ngIf="preview" class="image-container hr-inline-group">\n        <div\n          class="image"\n          *ngFor="let file of files"\n          [ngStyle]="{\'background-image\': \'url(\'+ file.src +\')\'}"\n        >\n          <div *ngIf="file.pending" class="loading-overlay">\n            <div class="spinningCircle"></div>\n          </div>\n          <div *ngIf="!file.pending" class="x-mark" (click)="deleteFile(file)">\n            <span class="close"></span>\n          </div>\n        </div>\n      </div>\n    </div>\n  ',styles:["\n    .image-upload {\n      --common-radius: 3px;\n      --active-color: #33CC99;\n      position: relative;\n      border-radius: var(--common-radius);\n      border: #d0d0d0 dashed 1px;\n      font-family: sans-serif;\n    }\n\n    .file-is-over {\n      border-color: var(--active-color);\n      border-style: solid;\n    }\n\n    .hr-inline-group:after {\n      display: table;\n      clear: both;\n      content: \"\";\n    }\n\n    .file-upload {\n      padding: 16px;\n      background-color: #f8f8f8;\n    }\n\n    .drag-box-message {\n      float: left;\n      display: inline-block;\n      margin-left: 12px;\n      padding-top: 14px;\n      color: #9b9b9b;\n      font-weight: 600;\n    }\n\n    label.button input[type=file] {\n      display: none;\n      position: fixed;\n      top: -99999px;\n    }\n\n    .clear {\n      background-color: #FF0000;\n    }\n\n    .button {\n      cursor: pointer;\n      padding: 10px;\n      color: white;\n      font-size: 1.25em;\n      font-weight: 500;\n      text-transform: uppercase;\n      display: inline-block;\n      float: left;\n      -webkit-box-shadow: 2px 2px 4px 0px rgba(148, 148, 148, 0.6);\n      -moz-box-shadow: 2px 2px 4px 0px rgba(148, 148, 148, 0.6);\n      box-shadow: 2px 2px 4px 0px rgba(148, 148, 148, 0.6);\n    }\n\n    .button:active span {\n      position: relative;\n      display: block;\n      top: 1px;\n    }\n\n    .upload {\n      background-color: var(--active-color);\n    }\n\n    .image-container {\n      background-color: #fdfdfd;\n      padding: 0 10px 0 10px;\n    }\n\n    .image {\n      float: left;\n      display: inline-block;\n      margin: 6px;\n      width: 86px;\n      height: 86px;\n      background: center center no-repeat;\n      background-size: contain;\n      position: relative;\n    }\n\n    .x-mark {\n      width: 20px;\n      height: 20px;\n      text-align: center;\n      cursor: pointer;\n      border-radius: 2px;\n      float: right;\n      background-color: black;\n      opacity: .7;\n      color: white;\n      margin: 2px;\n    }\n\n    .close {\n      width: 20px;\n      height: 20px;\n      opacity: .7;\n      position: relative;\n      padding-right: 3px;\n    }\n\n    .x-mark:hover .close {\n      opacity: 1;\n    }\n\n    .close:before, .close:after {\n      border-radius: 2px;\n      position: absolute;\n      content: '';\n      height: 16px;\n      width: 2px;\n      top: 2px;\n      background-color: #FFFFFF;\n    }\n\n    .close:before {\n      transform: rotate(45deg);\n    }\n\n    .close:after {\n      transform: rotate(-45deg);\n    }\n\n    .loading-overlay {\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      background-color: black;\n      opacity: .7;\n    }\n\n    .spinningCircle {\n      height: 30px;\n      width: 30px;\n      margin: auto;\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      border-radius: 50%;\n      border: 3px solid rgba(255, 255, 255, 0);\n      border-top: 3px solid white;\n      border-right: 3px solid white;\n      -webkit-animation: spinner 2s infinite cubic-bezier(0.085, 0.625, 0.855, 0.360);\n      animation: spinner 2s infinite cubic-bezier(0.085, 0.625, 0.855, 0.360);\n    }\n\n    .file-too-large {\n      color: red;\n      padding: 0 15px;\n    }\n\n    @-webkit-keyframes spinner {\n      0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n      }\n      100% {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg);\n      }\n    }\n\n    @keyframes spinner {\n      0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n      }\n      100% {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg);\n\n      }\n    }\n  "]}]}],i.ctorParameters=function(){return[{type:o.ImageService}]},i.propDecorators={buttonCaption:[{type:t.Input}],dropBoxMessage:[{type:t.Input}],fileTooLargeMessage:[{type:t.Input}],headers:[{type:t.Input}],max:[{type:t.Input}],maxFileSize:[{type:t.Input}],preview:[{type:t.Input}],partName:[{type:t.Input}],supportedExtensions:[{type:t.Input,args:["extensions"]}],url:[{type:t.Input}],withCredentials:[{type:t.Input}],removed:[{type:t.Output}],uploadStateChanged:[{type:t.Output}],uploadFinished:[{type:t.Output}],inputElement:[{type:t.ViewChild,args:["input"]}]},l.ImageUploadComponent=i},"3GS8":function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=function(){function n(){}return n.prototype.onUploadFinished=function(n){console.log(JSON.stringify(n.serverResponse))},n.prototype.onRemoved=function(n){},n.prototype.onUploadStateChanged=function(n){console.log(JSON.stringify(n))},n}()},"3cdd":function(n,l,e){"use strict";function t(n){return p["ɵvid"](0,[(n()(),p["ɵeld"](0,null,null,3,"label",[["class","clear button"]],null,[[null,"click"]],function(n,l,e){var t=!0,o=n.component;if("click"===l){t=!1!==o.deleteAll()&&t}return t},null,null)),(n()(),p["ɵted"](null,["\n          "])),(n()(),p["ɵeld"](0,null,null,0,"span",[],[[8,"innerText",0]],null,null,null,null)),(n()(),p["ɵted"](null,["\n        "]))],null,function(n,l){n(l,2,0,"Clear")})}function o(n){return p["ɵvid"](0,[(n()(),p["ɵeld"](0,null,null,0,"p",[["class","file-too-large"]],[[8,"innerText",0]],null,null,null,null))],null,function(n,l){n(l,0,0,l.component.fileTooLargeMessage)})}function u(n){return p["ɵvid"](0,[(n()(),p["ɵeld"](0,null,null,3,"div",[["class","loading-overlay"]],null,null,null,null,null)),(n()(),p["ɵted"](null,["\n            "])),(n()(),p["ɵeld"](0,null,null,0,"div",[["class","spinningCircle"]],null,null,null,null,null)),(n()(),p["ɵted"](null,["\n          "]))],null,null)}function i(n){return p["ɵvid"](0,[(n()(),p["ɵeld"](0,null,null,3,"div",[["class","x-mark"]],null,[[null,"click"]],function(n,l,e){var t=!0,o=n.component;if("click"===l){t=!1!==o.deleteFile(n.parent.context.$implicit)&&t}return t},null,null)),(n()(),p["ɵted"](null,["\n            "])),(n()(),p["ɵeld"](0,null,null,0,"span",[["class","close"]],null,null,null,null,null)),(n()(),p["ɵted"](null,["\n          "]))],null,null)}function r(n){return p["ɵvid"](0,[(n()(),p["ɵeld"](0,null,null,9,"div",[["class","image"]],null,null,null,null,null)),p["ɵdid"](278528,null,0,c.NgStyle,[p.KeyValueDiffers,p.ElementRef,p.Renderer],{ngStyle:[0,"ngStyle"]},null),p["ɵpod"](["background-image"]),(n()(),p["ɵted"](null,["\n          "])),(n()(),p["ɵand"](16777216,null,null,1,null,u)),p["ɵdid"](16384,null,0,c.NgIf,[p.ViewContainerRef,p.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),p["ɵted"](null,["\n          "])),(n()(),p["ɵand"](16777216,null,null,1,null,i)),p["ɵdid"](16384,null,0,c.NgIf,[p.ViewContainerRef,p.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),p["ɵted"](null,["\n        "]))],function(n,l){n(l,1,0,n(l,2,0,"url("+l.context.$implicit.src+")")),n(l,5,0,l.context.$implicit.pending),n(l,8,0,!l.context.$implicit.pending)},null)}function a(n){return p["ɵvid"](0,[(n()(),p["ɵeld"](0,null,null,4,"div",[["class","image-container hr-inline-group"]],null,null,null,null,null)),(n()(),p["ɵted"](null,["\n        "])),(n()(),p["ɵand"](16777216,null,null,1,null,r)),p["ɵdid"](802816,null,0,c.NgForOf,[p.ViewContainerRef,p.TemplateRef,p.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),p["ɵted"](null,["\n      "]))],function(n,l){n(l,3,0,l.component.files)},null)}function s(n){return p["ɵvid"](0,[p["ɵqud"](402653184,1,{inputElement:0}),(n()(),p["ɵted"](null,["\n    "])),(n()(),p["ɵeld"](0,null,null,25,"div",[["class","image-upload"],["fileDrop",""]],null,[[null,"fileOver"],[null,"fileDrop"],[null,"drop"],[null,"dragleave"],[null,"dragover"]],function(n,l,e){var t=!0,o=n.component;if("drop"===l){t=!1!==p["ɵnov"](n,5).onDrop(e)&&t}if("dragleave"===l){t=!1!==p["ɵnov"](n,5).onDragLeave(e)&&t}if("dragover"===l){t=!1!==p["ɵnov"](n,5).onDragOver(e)&&t}if("fileOver"===l){t=!1!==o.onFileOver(e)&&t}if("fileDrop"===l){t=!1!==o.onFileChange(e)&&t}return t},null,null)),p["ɵdid"](278528,null,0,c.NgClass,[p.IterableDiffers,p.KeyValueDiffers,p.ElementRef,p.Renderer],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),p["ɵpod"](["file-is-over"]),p["ɵdid"](16384,null,0,f.FileDropDirective,[],{accept:[0,"accept"]},{fileOver:"fileOver",fileDrop:"fileDrop"}),(n()(),p["ɵted"](null,["\n      "])),(n()(),p["ɵeld"](0,null,null,13,"div",[["class","file-upload hr-inline-group"]],null,null,null,null,null)),(n()(),p["ɵted"](null,["\n        "])),(n()(),p["ɵeld"](0,null,null,5,"label",[["class","upload button"]],null,null,null,null,null)),(n()(),p["ɵted"](null,["\n          "])),(n()(),p["ɵeld"](0,null,null,0,"span",[],[[8,"innerText",0]],null,null,null,null)),(n()(),p["ɵted"](null,["\n          "])),(n()(),p["ɵeld"](0,[[1,0],["input",1]],null,0,"input",[["multiple",""],["type","file"]],[[8,"accept",0]],[[null,"change"]],function(n,l,e){var t=!0,o=n.component;if("change"===l){t=!1!==o.onFileChange(p["ɵnov"](n,13).files)&&t}return t},null,null)),(n()(),p["ɵted"](null,["\n        "])),(n()(),p["ɵted"](null,["\n        "])),(n()(),p["ɵand"](16777216,null,null,1,null,t)),p["ɵdid"](16384,null,0,c.NgIf,[p.ViewContainerRef,p.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),p["ɵted"](null,["\n        "])),(n()(),p["ɵeld"](0,null,null,0,"div",[["class","drag-box-message"]],[[8,"innerText",0]],null,null,null,null)),(n()(),p["ɵted"](null,["\n      "])),(n()(),p["ɵted"](null,["\n\n      "])),(n()(),p["ɵand"](16777216,null,null,1,null,o)),p["ɵdid"](16384,null,0,c.NgIf,[p.ViewContainerRef,p.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),p["ɵted"](null,["\n\n      "])),(n()(),p["ɵand"](16777216,null,null,1,null,a)),p["ɵdid"](16384,null,0,c.NgIf,[p.ViewContainerRef,p.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),p["ɵted"](null,["\n    "])),(n()(),p["ɵted"](null,["\n  "]))],function(n,l){var e=l.component;n(l,3,0,"image-upload",n(l,4,0,e.fileOver)),n(l,5,0,e.supportedExtensions),n(l,17,0,e.fileCounter>0),n(l,23,0,e.showFileTooLargeMessage),n(l,26,0,e.preview)},function(n,l){var e=l.component;n(l,11,0,e.buttonCaption),n(l,13,0,e.supportedExtensions),n(l,19,0,e.dropBoxMessage)})}function d(n){return p["ɵvid"](0,[(n()(),p["ɵeld"](0,null,null,1,"image-upload",[],null,null,null,s,v)),p["ɵdid"](114688,null,0,g.ImageUploadComponent,[m.ImageService],null,null)],function(n,l){n(l,1,0)},null)}var p=e("/oeL"),c=e("qbdv"),g=e("1tl3"),f=(e.n(g),e("EilG")),m=(e.n(f),e("7fc5"));e.n(m);e.d(l,"b",function(){return v}),l.a=s;var h=[".image-upload[_ngcontent-%COMP%] {\n      --common-radius: 3px;\n      --active-color: #33CC99;\n      position: relative;\n      border-radius: var(--common-radius);\n      border: #d0d0d0 dashed 1px;\n      font-family: sans-serif;\n    }\n\n    .file-is-over[_ngcontent-%COMP%] {\n      border-color: var(--active-color);\n      border-style: solid;\n    }\n\n    .hr-inline-group[_ngcontent-%COMP%]:after {\n      display: table;\n      clear: both;\n      content: \"\";\n    }\n\n    .file-upload[_ngcontent-%COMP%] {\n      padding: 16px;\n      background-color: #f8f8f8;\n    }\n\n    .drag-box-message[_ngcontent-%COMP%] {\n      float: left;\n      display: inline-block;\n      margin-left: 12px;\n      padding-top: 14px;\n      color: #9b9b9b;\n      font-weight: 600;\n    }\n\n    label.button[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n      display: none;\n      position: fixed;\n      top: -99999px;\n    }\n\n    .clear[_ngcontent-%COMP%] {\n      background-color: #FF0000;\n    }\n\n    .button[_ngcontent-%COMP%] {\n      cursor: pointer;\n      padding: 10px;\n      color: white;\n      font-size: 1.25em;\n      font-weight: 500;\n      text-transform: uppercase;\n      display: inline-block;\n      float: left;\n      -webkit-box-shadow: 2px 2px 4px 0px rgba(148, 148, 148, 0.6);\n      -moz-box-shadow: 2px 2px 4px 0px rgba(148, 148, 148, 0.6);\n      box-shadow: 2px 2px 4px 0px rgba(148, 148, 148, 0.6);\n    }\n\n    .button[_ngcontent-%COMP%]:active   span[_ngcontent-%COMP%] {\n      position: relative;\n      display: block;\n      top: 1px;\n    }\n\n    .upload[_ngcontent-%COMP%] {\n      background-color: var(--active-color);\n    }\n\n    .image-container[_ngcontent-%COMP%] {\n      background-color: #fdfdfd;\n      padding: 0 10px 0 10px;\n    }\n\n    .image[_ngcontent-%COMP%] {\n      float: left;\n      display: inline-block;\n      margin: 6px;\n      width: 86px;\n      height: 86px;\n      background: center center no-repeat;\n      background-size: contain;\n      position: relative;\n    }\n\n    .x-mark[_ngcontent-%COMP%] {\n      width: 20px;\n      height: 20px;\n      text-align: center;\n      cursor: pointer;\n      border-radius: 2px;\n      float: right;\n      background-color: black;\n      opacity: .7;\n      color: white;\n      margin: 2px;\n    }\n\n    .close[_ngcontent-%COMP%] {\n      width: 20px;\n      height: 20px;\n      opacity: .7;\n      position: relative;\n      padding-right: 3px;\n    }\n\n    .x-mark[_ngcontent-%COMP%]:hover   .close[_ngcontent-%COMP%] {\n      opacity: 1;\n    }\n\n    .close[_ngcontent-%COMP%]:before, .close[_ngcontent-%COMP%]:after {\n      border-radius: 2px;\n      position: absolute;\n      content: '';\n      height: 16px;\n      width: 2px;\n      top: 2px;\n      background-color: #FFFFFF;\n    }\n\n    .close[_ngcontent-%COMP%]:before {\n      transform: rotate(45deg);\n    }\n\n    .close[_ngcontent-%COMP%]:after {\n      transform: rotate(-45deg);\n    }\n\n    .loading-overlay[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      background-color: black;\n      opacity: .7;\n    }\n\n    .spinningCircle[_ngcontent-%COMP%] {\n      height: 30px;\n      width: 30px;\n      margin: auto;\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      border-radius: 50%;\n      border: 3px solid rgba(255, 255, 255, 0);\n      border-top: 3px solid white;\n      border-right: 3px solid white;\n      -webkit-animation: spinner 2s infinite cubic-bezier(0.085, 0.625, 0.855, 0.360);\n      animation: spinner 2s infinite cubic-bezier(0.085, 0.625, 0.855, 0.360);\n    }\n\n    .file-too-large[_ngcontent-%COMP%] {\n      color: red;\n      padding: 0 15px;\n    }\n\n    @-webkit-keyframes spinner {\n      0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n      }\n      100% {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg);\n      }\n    }\n\n    @keyframes spinner {\n      0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n      }\n      100% {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg);\n\n      }\n    }"],v=p["ɵcrt"]({encapsulation:0,styles:h,data:{}});p["ɵccf"]("image-upload",g.ImageUploadComponent,d,{buttonCaption:"buttonCaption",dropBoxMessage:"dropBoxMessage",fileTooLargeMessage:"fileTooLargeMessage",headers:"headers",max:"max",maxFileSize:"maxFileSize",preview:"preview",partName:"partName",supportedExtensions:"extensions",url:"url",withCredentials:"withCredentials"},{removed:"removed",uploadStateChanged:"uploadStateChanged",uploadFinished:"uploadFinished"},[])},"7fc5":function(n,l,e){"use strict";var t=e("/oeL"),o=e("CPp0"),u=function(){function n(n){this.http=n}return n.prototype.postImage=function(n,l,e,t,u){if(void 0===t&&(t="image"),!n||""===n)throw new Error("Url is not set! Please set it before doing queries");var i=new o.RequestOptions;return u&&(i.withCredentials=u),e&&(i.headers=new o.Headers(e)),this.http.post(n,(new FormData).append(t,l),i)},n}();u.decorators=[{type:t.Injectable}],u.ctorParameters=function(){return[{type:o.Http}]},l.ImageService=u},EilG:function(n,l,e){"use strict";var t=e("/oeL"),o=function(){function n(){this.fileOver=new t.EventEmitter,this.fileDrop=new t.EventEmitter}return n.prototype.onDrop=function(l){var e=n.getDataTransfer(l);if(n.hasFiles(e.types)){l.preventDefault();var t=this.filterFiles(e.files);l.preventDefault(),this.fileOver.emit(!1),this.fileDrop.emit(t)}},n.prototype.onDragLeave=function(n){this.fileOver.emit(!1)},n.prototype.onDragOver=function(l){var e=n.getDataTransfer(l);n.hasFiles(e.types)&&(e.dropEffect="copy",l.preventDefault(),this.fileOver.emit(!0))},n.prototype.filterFiles=function(l){if(!this.accept||0===this.accept.length)return l;for(var e=[],t=0;t<l.length;t++)for(var o=0;o<this.accept.length;o++)if(n.matchRule(this.accept[o],l[t].type)){e.push(l[t]);break}return e},n.getDataTransfer=function(n){return n.dataTransfer?n.dataTransfer:n.originalEvent.dataTransfer},n.hasFiles=function(n){return!!n&&(n.indexOf?-1!==n.indexOf("Files"):!!n.contains&&n.contains("Files"))},n.matchRule=function(n,l){return new RegExp("^"+n.split("*").join(".*")+"$").test(l)},n}();o.decorators=[{type:t.Directive,args:[{selector:"[fileDrop]"}]}],o.ctorParameters=function(){return[]},o.propDecorators={accept:[{type:t.Input}],fileOver:[{type:t.Output}],fileDrop:[{type:t.Output}],onDrop:[{type:t.HostListener,args:["drop",["$event"]]}],onDragLeave:[{type:t.HostListener,args:["dragleave",["$event"]]}],onDragOver:[{type:t.HostListener,args:["dragover",["$event"]]}]},l.FileDropDirective=o},"OK+M":function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=function(){function n(){}return n}()},T7w8:function(n,l,e){"use strict";function t(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,null,null,1,"h4",[["class","mb-3"]],null,null,null,null,null)),(n()(),u["ɵted"](null,["Custom Labels"])),(n()(),u["ɵted"](null,["\n\n"])),(n()(),u["ɵeld"](0,null,null,1,"image-upload",[["buttonCaption","PRESS ME AAAAAAAAAH"],["dropBoxMessage","DROP ON ME AAAAAAAAAH"],["url","https://httpbin.org/status/200"]],null,null,null,i.a,i.b)),u["ɵdid"](114688,null,0,r.ImageUploadComponent,[a.ImageService],{buttonCaption:[0,"buttonCaption"],dropBoxMessage:[1,"dropBoxMessage"],url:[2,"url"]},null),(n()(),u["ɵted"](null,["\n\n"])),(n()(),u["ɵeld"](0,null,null,2,"pre",[],null,null,null,null,null)),(n()(),u["ɵeld"](0,null,null,1,"code",[["class","language-markup"]],null,null,null,null,null)),(n()(),u["ɵted"](null,['<image-upload\n  url="https://httpbin.org/status/200"\n  buttonCaption="PRESS ME AAAAAAAAAH"\n  dropBoxMessage="DROP ON ME AAAAAAAAAH">\n</image-upload>'])),(n()(),u["ɵted"](null,["\n"]))],function(n,l){n(l,4,0,"PRESS ME AAAAAAAAAH","DROP ON ME AAAAAAAAAH","https://httpbin.org/status/200")},null)}function o(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,null,null,1,"customise",[],null,null,null,t,p)),u["ɵdid"](49152,null,0,s.a,[],null,null)],null,null)}var u=e("/oeL"),i=e("3cdd"),r=e("1tl3"),a=(e.n(r),e("7fc5")),s=(e.n(a),e("OK+M"));e.d(l,"b",function(){return p}),l.a=t;var d=[],p=u["ɵcrt"]({encapsulation:2,styles:d,data:{}});u["ɵccf"]("customise",s.a,o,{},{},[])},TEsJ:function(n,l,e){"use strict";function t(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,null,null,1,"h4",[["class","mb-3"]],null,null,null,null,null)),(n()(),u["ɵted"](null,["Events"])),(n()(),u["ɵted"](null,["\n\n"])),(n()(),u["ɵeld"](0,null,null,2,"image-upload",[["url","https://httpbin.org/status/200"]],null,[[null,"removed"],[null,"uploadFinished"],[null,"uploadStateChanged"]],function(n,l,e){var t=!0,o=n.component;if("removed"===l){t=!1!==o.onRemoved(e)&&t}if("uploadFinished"===l){t=!1!==o.onUploadFinished(e)&&t}if("uploadStateChanged"===l){t=!1!==o.onUploadStateChanged(e)&&t}return t},r.a,r.b)),u["ɵdid"](114688,null,0,a.ImageUploadComponent,[s.ImageService],{url:[0,"url"]},{removed:"removed",uploadStateChanged:"uploadStateChanged",uploadFinished:"uploadFinished"}),(n()(),u["ɵted"](null,["\n"])),(n()(),u["ɵted"](null,["\n\n"])),(n()(),u["ɵeld"](0,null,null,2,"pre",[],null,null,null,null,null)),(n()(),u["ɵeld"](0,null,null,1,"code",[["class","language-markup"]],null,null,null,null,null)),(n()(),u["ɵted"](null,['<image-upload\n  url="https://httpbin.org/status/200"\n  (removed)="onRemoved($event)"\n  (uploadFinished)="onUploadFinished($event)"  \n  (uploadStateChanged)="onUploadStateChanged($event)">\n</image-upload>'])),(n()(),u["ɵted"](null,["\n\n"])),(n()(),u["ɵeld"](0,null,null,3,"pre",[],null,null,null,null,null)),(n()(),u["ɵeld"](0,null,null,2,"code",[["class","language-typescript"]],null,null,null,null,null)),(n()(),u["ɵted"](null,["imageFinishedUploading(file: FileHolder) {\n  console.log(JSON.stringify(file.serverResponse));\n}\n\nonRemoved(file: FileHolder) {\n  // do some stuff with the removed file.\n}\n\nonUploadStateChanged(state: boolean) {\n  console.log(JSON.stringify(state));\n}"])),(n()(),u["ɵted"](null,["\n"])),(n()(),u["ɵted"](null,["\n"]))],function(n,l){n(l,4,0,"https://httpbin.org/status/200")},null)}function o(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,null,null,1,"events",[],null,null,null,t,p)),u["ɵdid"](49152,null,0,i.a,[],null,null)],null,null)}var u=e("/oeL"),i=e("3GS8"),r=e("3cdd"),a=e("1tl3"),s=(e.n(a),e("7fc5"));e.n(s);e.d(l,"b",function(){return p}),l.a=t;var d=[],p=u["ɵcrt"]({encapsulation:2,styles:d,data:{}});u["ɵccf"]("events",i.a,o,{},{},[])},"aR8+":function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=function(){function n(){}return n}()},cDNt:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=e("/oeL"),o=e("waH/"),u=(e.n(o),e("tqEy")),i=(e.n(u),e("p5Ee")),r=e("+h1B"),a=e("fc+i");i.a.production&&e.i(t.enableProdMode)(),e.i(a.a)().bootstrapModuleFactory(r.a)},gPcP:function(n,l,e){"use strict";var t=e("qbdv"),o=e("/oeL"),u=e("CPp0"),i=e("EilG"),r=e("1tl3"),a=e("7fc5"),s=function(){function n(){}return n.forRoot=function(){return{ngModule:n,providers:[a.ImageService]}},n}();s.decorators=[{type:o.NgModule,args:[{imports:[t.CommonModule,u.HttpModule],declarations:[r.ImageUploadComponent,i.FileDropDirective],exports:[r.ImageUploadComponent]}]}],s.ctorParameters=function(){return[]},l.ImageUploadModule=s},p5Ee:function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t={production:!0}},q4dy:function(n,l,e){"use strict";function t(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,null,null,4,"div",[["class","github-star-button"]],null,null,null,null,null)),(n()(),u["ɵted"](null,["\n  "])),(n()(),u["ɵeld"](0,null,null,1,"a",[["aria-label","Star aberezkin/ng2-image-upload on GitHub"],["class","github-button"],["data-icon","octicon-star"],["data-show-count","true"],["data-size","large"],["href","https://github.com/aberezkin/ng2-image-upload"]],null,null,null,null,null)),(n()(),u["ɵted"](null,["Star"])),(n()(),u["ɵted"](null,["\n"])),(n()(),u["ɵted"](null,["\n\n"])),(n()(),u["ɵeld"](0,null,null,7,"div",[["class","jumbotron jumbotron-fluid text-center"]],null,null,null,null,null)),(n()(),u["ɵted"](null,["\n  "])),(n()(),u["ɵeld"](0,null,null,1,"h1",[["class","display-3"]],null,null,null,null,null)),(n()(),u["ɵted"](null,["\n    Angular Image Upload\n  "])),(n()(),u["ɵted"](null,["\n  "])),(n()(),u["ɵeld"](0,null,null,1,"p",[["class","lead"]],null,null,null,null,null)),(n()(),u["ɵted"](null,["\n    Angular component for image uploading\n  "])),(n()(),u["ɵted"](null,["\n"])),(n()(),u["ɵted"](null,["\n\n"])),(n()(),u["ɵeld"](0,null,null,21,"div",[["class","container"],["highlight-js-content",".highlight"]],null,null,null,null,null)),(n()(),u["ɵted"](null,["\n  "])),(n()(),u["ɵeld"](0,null,null,1,"basic",[],null,null,null,i.a,i.b)),u["ɵdid"](49152,null,0,r.a,[],null,null),(n()(),u["ɵted"](null,["\n  "])),(n()(),u["ɵeld"](0,null,null,0,"div",[["class","mt-3"]],null,null,null,null,null)),(n()(),u["ɵted"](null,["\n  "])),(n()(),u["ɵeld"](0,null,null,1,"filter",[],null,null,null,a.a,a.b)),u["ɵdid"](49152,null,0,s.a,[],null,null),(n()(),u["ɵted"](null,["\n  "])),(n()(),u["ɵeld"](0,null,null,0,"div",[["class","mt-3"]],null,null,null,null,null)),(n()(),u["ɵted"](null,["\n  "])),(n()(),u["ɵeld"](0,null,null,1,"customise",[],null,null,null,d.a,d.b)),u["ɵdid"](49152,null,0,p.a,[],null,null),(n()(),u["ɵted"](null,["\n  "])),(n()(),u["ɵeld"](0,null,null,0,"div",[["class","mt-3"]],null,null,null,null,null)),(n()(),u["ɵted"](null,["\n  "])),(n()(),u["ɵeld"](0,null,null,1,"events",[],null,null,null,c.a,c.b)),u["ɵdid"](49152,null,0,g.a,[],null,null),(n()(),u["ɵted"](null,["\n  "])),(n()(),u["ɵeld"](0,null,null,0,"div",[["class","mt-5"]],null,null,null,null,null)),(n()(),u["ɵted"](null,["\n"])),(n()(),u["ɵted"](null,["\n"]))],null,null)}function o(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,null,null,1,"app-root",[],null,null,null,t,h)),u["ɵdid"](49152,null,0,f.a,[],null,null)],null,null)}var u=e("/oeL"),i=e("tNwT"),r=e("zE66"),a=e("wo3w"),s=e("z1R0"),d=e("T7w8"),p=e("OK+M"),c=e("TEsJ"),g=e("3GS8"),f=e("wQAS");e.d(l,"a",function(){return v});var m=[],h=u["ɵcrt"]({encapsulation:2,styles:m,data:{}}),v=u["ɵccf"]("app-root",f.a,o,{},{},[])},qtrl:function(n,l){function e(n){throw new Error("Cannot find module '"+n+"'.")}e.keys=function(){return[]},e.resolve=e,n.exports=e,e.id="qtrl"},tNwT:function(n,l,e){"use strict";function t(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,null,null,1,"h4",[["class","mb-3"]],null,null,null,null,null)),(n()(),u["ɵted"](null,["Basic Usage"])),(n()(),u["ɵted"](null,["\n\n"])),(n()(),u["ɵeld"](0,null,null,1,"image-upload",[["url","https://httpbin.org/status/200"]],null,null,null,i.a,i.b)),u["ɵdid"](114688,null,0,r.ImageUploadComponent,[a.ImageService],{url:[0,"url"]},null),(n()(),u["ɵted"](null,["\n\n"])),(n()(),u["ɵeld"](0,null,null,2,"pre",[],null,null,null,null,null)),(n()(),u["ɵeld"](0,null,null,1,"code",[["class","language-markup"]],null,null,null,null,null)),(n()(),u["ɵted"](null,['<image-upload url="https://httpbin.org/status/200"></image-upload>'])),(n()(),u["ɵted"](null,["\n\n"])),(n()(),u["ɵeld"](0,null,null,1,"h5",[["class","mb-3 mt-3"]],null,null,null,null,null)),(n()(),u["ɵted"](null,["With headers"])),(n()(),u["ɵted"](null,["\n\n"])),(n()(),u["ɵeld"](0,null,null,1,"image-upload",[["url","https://httpbin.org/status/200"]],null,null,null,i.a,i.b)),u["ɵdid"](114688,null,0,r.ImageUploadComponent,[a.ImageService],{headers:[0,"headers"],url:[1,"url"]},null),(n()(),u["ɵted"](null,["\n\n"])),(n()(),u["ɵeld"](0,null,null,2,"pre",[],null,null,null,null,null)),(n()(),u["ɵeld"](0,null,null,1,"code",[["class","language-markup"]],null,null,null,null,null)),(n()(),u["ɵted"](null,['<image-upload url="https://httpbin.org/status/200" [headers]="myHeaders"></image-upload>'])),(n()(),u["ɵted"](null,["\n\n"])),(n()(),u["ɵeld"](0,null,null,3,"pre",[],null,null,null,null,null)),(n()(),u["ɵeld"](0,null,null,2,"code",[["class","language-typescript"]],null,null,null,null,null)),(n()(),u["ɵted"](null,["myHeaders: { [name: string]: any } = {\n  'Authorization': 'MyToken',\n  'Another Header': 'AnotherValue'\n};"])),(n()(),u["ɵted"](null,["\n"])),(n()(),u["ɵted"](null,["\n"]))],function(n,l){var e=l.component;n(l,4,0,"https://httpbin.org/status/200");n(l,14,0,e.myHeaders,"https://httpbin.org/status/200")},null)}function o(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,null,null,1,"basic",[],null,null,null,t,p)),u["ɵdid"](49152,null,0,s.a,[],null,null)],null,null)}var u=e("/oeL"),i=e("3cdd"),r=e("1tl3"),a=(e.n(r),e("7fc5")),s=(e.n(a),e("zE66"));e.d(l,"b",function(){return p}),l.a=t;var d=[],p=u["ɵcrt"]({encapsulation:2,styles:d,data:{}});u["ɵccf"]("basic",s.a,o,{},{},[])},wQAS:function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=function(){function n(){}return n}()},wo3w:function(n,l,e){"use strict";function t(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,null,null,1,"h4",[["class","mb-3"]],null,null,null,null,null)),(n()(),u["ɵted"](null,["Limit and filter images"])),(n()(),u["ɵted"](null,["\n\n"])),(n()(),u["ɵeld"](0,null,null,2,"image-upload",[["url","https://httpbin.org/status/200"]],null,null,null,i.a,i.b)),u["ɵdid"](114688,null,0,r.ImageUploadComponent,[a.ImageService],{max:[0,"max"],supportedExtensions:[1,"supportedExtensions"],url:[2,"url"]},null),u["ɵpad"](2),(n()(),u["ɵted"](null,["\n\n"])),(n()(),u["ɵeld"](0,null,null,2,"pre",[],null,null,null,null,null)),(n()(),u["ɵeld"](0,null,null,1,"code",[["class","language-markup"]],null,null,null,null,null)),(n()(),u["ɵted"](null,['<image-upload url="https://httpbin.org/status/200" [max]="2" [extensions]="[\'jpeg\',\'png\']"></image-upload>'])),(n()(),u["ɵted"](null,["\n"]))],function(n,l){n(l,4,0,2,n(l,5,0,"jpeg","png"),"https://httpbin.org/status/200")},null)}function o(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,null,null,1,"filter",[],null,null,null,t,p)),u["ɵdid"](49152,null,0,s.a,[],null,null)],null,null)}var u=e("/oeL"),i=e("3cdd"),r=e("1tl3"),a=(e.n(r),e("7fc5")),s=(e.n(a),e("z1R0"));e.d(l,"b",function(){return p}),l.a=t;var d=[],p=u["ɵcrt"]({encapsulation:2,styles:d,data:{}});u["ɵccf"]("filter",s.a,o,{},{},[])},z1R0:function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=function(){function n(){}return n}()},zE66:function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=function(){function n(){this.myHeaders={Authorization:"MyToken","Another Header":"AnotherValue"}}return n}()}},[1]);