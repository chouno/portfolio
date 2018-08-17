
const isDeploy = true;
const addPathPrefix = '/portforio';
const AppPrefix = {
  URL:{
    ROOT:isDeploy?addPathPrefix+'/':'/',
    SETO:isDeploy?addPathPrefix+'/setogreenEstate':'/setogreenEstate',
    SHIMOGAMO:isDeploy?addPathPrefix+'/shimogamodeli':'/shimogamodeli',
    TTF:isDeploy?addPathPrefix+'/TTFConverter':'/TTFConverter',
    CHRONO:isDeploy?addPathPrefix+'/chronograph':'/chronograph',
    DASHBOARD:isDeploy?addPathPrefix+'/dashboard':'/dashboard'
  }
}

export default AppPrefix;