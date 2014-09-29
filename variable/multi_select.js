// 院系安排的课

function selectThis(){
  //selectThis('71013180','71013180201420000','11',this,'6')
                $.ajax({ 
                    async:false,
                    type:"post", 
                    contentType:"application/json", 
                    url:"http://xk.urp.seu.edu.cn/jw_css/xk/runSelectclassSelectionAction.action?select_jxbbh=71013530201420000&select_xkkclx=11&select_jhkcdm=71013530", 
                    data:"{}", 
                    dataType:"json", 
                    success:function(data){ 
                      if(data.rso.isSuccess == 'false'){
                        console.log('failed');
                      }else{
                        return;
                        //alert('已成功选择!');
                      
                      }
                    }
             });
            }

function start(){
  setInterval(selectThis,5000);
}

setTimeout(start,1000);


// 体育课

function selectThis(){
  //jxbbh = TY18M00022201420006
                $.ajax({ 
                    async:false,
                    type:"post", 
                    contentType:"application/json", 
                    url:"http://xk.urp.seu.edu.cn/jw_css/xk/runSelectclassSelectionAction.action?select_jxbbh=TY18M00022201420006&select_xkkclx=33&select_jhkcdm=18010013&select_mkbh=18010013&dxdbz=0", 
                    data:"{}", 
                    dataType:"json", 
                    success:function(data){
                      //console.log(url); 
                      if(data.rso.isSuccess == 'false'){
                        console.log('failed');
                      }else{
                        console.log('select done! success !!');
                        return;
                        //alert('已成功选择!');                     
                      }
                    }
             });
            }

function start(){
  setInterval(selectThis,5000);
}

setTimeout(start,1000);

//  人文课

function selectThis(){
  //jxbbh = GR0003408201420 影视艺术鉴赏
                $.ajax({ 
                    async:false,
                    type:"post", 
                    contentType:"application/json", 
                    url:"http://xk.urp.seu.edu.cn/jw_css/xk/runSelectclassSelectionAction.action?select_jxbbh=GR0003408201420&select_xkkclx=45&select_jhkcdm=00034&select_mkbh=rwskl", 
                    data:"{}", 
                    dataType:"json", 
                    success:function(data){
                      //console.log(url); 
                      if(data.rso.isSuccess == 'false'){
                        console.log('failed');
                      }else{
                        console.log('select done! success !!');
                        return;
                        //alert('已成功选择!');                     
                      }
                    }
             });
            }

function start(){
  setInterval(selectThis,5000);
}

start();
