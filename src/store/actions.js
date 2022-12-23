import axios from "axios"

export const getDetail = (context,txtField ) => {
    
             // eslint-disable-next-line  
            debugger;
            const URL = "http://ip-api.com/json/"+ txtField;
            axios.get(URL).then(response => {
                context.commit('SET_DETAIL',response.data)
                console.log(response.data)
                .catch(function (error) {
                    console.log(error);
                });
              
            })
}
