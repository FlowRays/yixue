// pages/userinfo/userinfo.js
Page({
  data: {
    campus: {'tcz': '天赐庄校区', 'dsh': '独墅湖校区', 'ych': '阳澄湖校区'}
  },
  onLoad: function (options) {
    // var that = this;
    // const db = wx.cloud.database();
    // // db.collection('user')
    // console.log('before db query');
    // db.collection('user').where({
    //   type: 'info'
    // })
    // .get({
    //   success: function(res) {
    //     var d = res.data[0];
    //     var user_info = JSON.stringify(d);
    //     // console.log(res.data[0]);
    //     that.setData({
    //       user: d['user'],
    //       name: d['name'],
    //       identify: d['identity'],
    //       id: d['id'],
    //       phone: d['phone']
    //     });
    //     if(d['user']=='管理员'){
    //       wx.cloud.callFunction({
    //         name: 'geter',
    //         data: {
    //           user_info: user_info
    //         },
    //       })
    //       .then(res => {
    //         console.log('call func')
    //         // console.log(res.result)
    //         var t = res.result;
    //         for(var i=0;i<t.length;++i){
    //           t[i]['period'] = JSON.parse(t[i]['period']);
    //         }
    //         console.log(t);
    //         that.setData({
    //           data: t
    //         });
    //         console.log('call func')
    //       })
    //       .catch(console.error)
    //     }
    //     // console.log(res.data)
    //   }
    // })
    // console.log('after db query');
    // db.collection(this.data.campus_name[this.data.campus_index]).doc(date).get().then(res => {
      //   // console.log('timeTable.'+String(date))
      //   var s = 'timeTable.'+res.data._id;
      //   this.setData({
      //     [s]: res.data
      //   });
      // })
  },
  onShow: function() {
    var that = this;
    const db = wx.cloud.database();
    // db.collection('user')
    console.log('before db query');
    db.collection('user').where({
      type: 'info'
    })
    .get({
      success: function(res) {
        var d = res.data[0];
        var user_info = JSON.stringify(d);
        // console.log(res.data[0]);
        that.setData({
          user: d['user'],
          name: d['name'],
          identify: d['identity'],
          id: d['id'],
          phone: d['phone']
        });
        // if(d['user']=='管理员'){
        //   wx.cloud.callFunction({
        //     name: 'geter',
        //     data: {
        //       user_info: user_info
        //     },
        //   })
        //   .then(res => {
        //     console.log('call func')
        //     console.log(res.result)
        //     var t = res.result;
        //     for(var i=0;i<t.length;++i){
        //       t[i]['period'] = JSON.parse(t[i]['period']);
        //     }
        //     console.log(t);
        //     t.sort(function(a,b){return a.date.localeCompare(b.date);});
        //     console.log(t);
        //     that.setData({
        //       data: t
        //     });
        //     console.log('call func')
        //   })
        //   .catch(console.error)
        // }
        // console.log(res.data)
      }
    })
    console.log('after db query');
  }
})
