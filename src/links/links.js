
/**
 * @description: losses, accuracy from classification network first microservice
 */
export const APIFLASKM1 = "http://127.0.0.1:5000/charting";

/**
 * @description: growth log and time from the second microservices
 */
export const APIFlask = "http://192.168.100.8:4000/bacteria"; 


/**
 * @description: Streptococcus prediction first microservice.
 */
export const APISingleStrep = "http://127.0.0.1:5000/strep";

/**
 * @description: Streptococcus Multiple predictions first microservice.
 */
export const APIMultipleStrep = "http://172.17.0.2:5000/list_strep";

/**
 * @description: Lactobacillus prediction first microservice.
 */
export const APISinlgeLact = "http://172.17.0.2:5000/lact";

/**
 * @description: Lactobacillus Multiple predictions first microservice.
 */
export const APIMultipleLact = "http://172.17.0.2:5000/list_lact";


// export default (APIFLASKM1)

/***
 * 
 * const [resVals, Setresvals] = useState({

    });

    {
    "targetBacterian": 4.106, 
    "minProteins": 2.591, 
    "tritatableAcid": 0.992, 
    "phSour": 4.415, 
    "fatMilk": 3.1925
}
 */