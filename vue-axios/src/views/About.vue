<template>
  <div class="about">
    <table style="width: 300px;margin: 0 auto;">
        <tbody>
        <tr v-for="w in dataList.hour24" :key="w.Fpredict_hour">
            <td>{{w.Fpredict_date}}</td>
            <td>{{w.Fpredict_hour}}点</td>
            <td>{{w.Fcondition}}</td>
        </tr>
        <tr>
            <td colspan="3">一共{{totalCount}}条数据</td>
        </tr>
        </tbody>
    </table>
  </div>
</template>
<script>
    export default {
        name: 'about',
        data: ()=> ({
            dataList: {},
            totalCount: 0
        }),
        mounted: function () {
            let me = this;
            me.getDataForTable()
                .then(data => {
                    me.dataList = data.data
                    me.totalCount = data.count
                })
        },
        methods: {
            getDataForTable () {
                let me = this;
                return new Promise((resolve) => {
                    // 额外的参数，比如headers
                    // let options = {
                    //     headers: {
                    //         'token': '00000'
                    //     }
                    // }
                    // 参数
                    let params = {};
                    me.$axios.post('http://tianqi.moji.com/index/getHour24',params/*,options*/)
                        // 请求成功后
                        .then(function (response) {
                            let data = response.data;
                            let count = data.hour24.length
                            resolve({
                                data,
                                count
                            })
                        })
                        // 请求失败处理
                        .catch(function (error) {
                            console.log(error);
                            let data = {
                                "hour24": [
                                    {
                                        "Fpredict_date": "2019-06-18",
                                        "Ficon_id": 2,
                                        "Fcondition_id": 13,
                                        "Ftemp": 28,
                                        "Fwspd": 16.92,
                                        "Fwind_dir_id": 8,
                                        "Ffeelslike": 40,
                                        "Fpredict_hour": 12,
                                        "Fhumidity": 89,
                                        "id": 892,
                                        "wind_degrees": "135",
                                        "Fcondition": "阴",
                                        "Fwdir": "SSE",
                                        "wind_level": 3
                                    },
                                    {
                                        "Fpredict_date": "2019-06-18",
                                        "Ficon_id": 2,
                                        "Fcondition_id": 13,
                                        "Ftemp": 28,
                                        "Fwspd": 18.72,
                                        "Fwind_dir_id": 9,
                                        "Ffeelslike": 40,
                                        "Fpredict_hour": 13,
                                        "Fhumidity": 88,
                                        "id": 892,
                                        "wind_degrees": "180",
                                        "Fcondition": "阴",
                                        "Fwdir": "S",
                                        "wind_level": 3
                                    },
                                    {
                                        "Fpredict_date": "2019-06-18",
                                        "Ficon_id": 2,
                                        "Fcondition_id": 13,
                                        "Ftemp": 28,
                                        "Fwspd": 20.88,
                                        "Fwind_dir_id": 9,
                                        "Ffeelslike": 36,
                                        "Fpredict_hour": 14,
                                        "Fhumidity": 75,
                                        "id": 892,
                                        "wind_degrees": "180",
                                        "Fcondition": "阴",
                                        "Fwdir": "S",
                                        "wind_level": 4
                                    },
                                    {
                                        "Fpredict_date": "2019-06-18",
                                        "Ficon_id": 2,
                                        "Fcondition_id": 13,
                                        "Ftemp": 28,
                                        "Fwspd": 19.8,
                                        "Fwind_dir_id": 9,
                                        "Ffeelslike": 37,
                                        "Fpredict_hour": 15,
                                        "Fhumidity": 76,
                                        "id": 892,
                                        "wind_degrees": "180",
                                        "Fcondition": "阴",
                                        "Fwdir": "S",
                                        "wind_level": 0
                                    },
                                    {
                                        "Fpredict_date": "2019-06-18",
                                        "Ficon_id": 2,
                                        "Fcondition_id": 13,
                                        "Ftemp": 28,
                                        "Fwspd": 18.72,
                                        "Fwind_dir_id": 9,
                                        "Ffeelslike": 37,
                                        "Fpredict_hour": 16,
                                        "Fhumidity": 76,
                                        "id": 892,
                                        "wind_degrees": "180",
                                        "Fcondition": "阴",
                                        "Fwdir": "S",
                                        "wind_level": 3
                                    },
                                    {
                                        "Fpredict_date": "2019-06-18",
                                        "Ficon_id": 2,
                                        "Fcondition_id": 13,
                                        "Ftemp": 27,
                                        "Fwspd": 17.28,
                                        "Fwind_dir_id": 9,
                                        "Ffeelslike": 35,
                                        "Fpredict_hour": 17,
                                        "Fhumidity": 80,
                                        "id": 892,
                                        "wind_degrees": "180",
                                        "Fcondition": "阴",
                                        "Fwdir": "S",
                                        "wind_level": 3
                                    },
                                    {
                                        "Fpredict_date": "2019-06-18",
                                        "Ficon_id": 2,
                                        "Fcondition_id": 13,
                                        "Ftemp": 27,
                                        "Fwspd": 16.2,
                                        "Fwind_dir_id": 9,
                                        "Ffeelslike": 35,
                                        "Fpredict_hour": 18,
                                        "Fhumidity": 81,
                                        "id": 892,
                                        "wind_degrees": "180",
                                        "Fcondition": "阴",
                                        "Fwdir": "S",
                                        "wind_level": 3
                                    },
                                    {
                                        "Fpredict_date": "2019-06-18",
                                        "Ficon_id": 2,
                                        "Fcondition_id": 13,
                                        "Ftemp": 27,
                                        "Fwspd": 14.76,
                                        "Fwind_dir_id": 9,
                                        "Ffeelslike": 35,
                                        "Fpredict_hour": 19,
                                        "Fhumidity": 83,
                                        "id": 892,
                                        "wind_degrees": "180",
                                        "Fcondition": "阴",
                                        "Fwdir": "S",
                                        "wind_level": 3
                                    },
                                    {
                                        "Fpredict_date": "2019-06-18",
                                        "Ficon_id": 2,
                                        "Fcondition_id": 13,
                                        "Ftemp": 27,
                                        "Fwspd": 13.68,
                                        "Fwind_dir_id": 8,
                                        "Ffeelslike": 33,
                                        "Fpredict_hour": 20,
                                        "Fhumidity": 83,
                                        "id": 892,
                                        "wind_degrees": "135",
                                        "Fcondition": "阴",
                                        "Fwdir": "SSE",
                                        "wind_level": 3
                                    },
                                    {
                                        "Fpredict_date": "2019-06-18",
                                        "Ficon_id": 2,
                                        "Fcondition_id": 13,
                                        "Ftemp": 27,
                                        "Fwspd": 12.6,
                                        "Fwind_dir_id": 8,
                                        "Ffeelslike": 33,
                                        "Fpredict_hour": 21,
                                        "Fhumidity": 84,
                                        "id": 892,
                                        "wind_degrees": "135",
                                        "Fcondition": "阴",
                                        "Fwdir": "SSE",
                                        "wind_level": 3
                                    },
                                    {
                                        "Fpredict_date": "2019-06-18",
                                        "Ficon_id": 2,
                                        "Fcondition_id": 13,
                                        "Ftemp": 27,
                                        "Fwspd": 11.52,
                                        "Fwind_dir_id": 8,
                                        "Ffeelslike": 33,
                                        "Fpredict_hour": 22,
                                        "Fhumidity": 84,
                                        "id": 892,
                                        "wind_degrees": "135",
                                        "Fcondition": "阴",
                                        "Fwdir": "SSE",
                                        "wind_level": 0
                                    },
                                    {
                                        "Fpredict_date": "2019-06-18",
                                        "Ficon_id": 2,
                                        "Fcondition_id": 13,
                                        "Ftemp": 27,
                                        "Fwspd": 10.8,
                                        "Fwind_dir_id": 8,
                                        "Ffeelslike": 34,
                                        "Fpredict_hour": 23,
                                        "Fhumidity": 91,
                                        "id": 892,
                                        "wind_degrees": "135",
                                        "Fcondition": "阴",
                                        "Fwdir": "SSE",
                                        "wind_level": 2
                                    },
                                    {
                                        "Fpredict_date": "2019-06-19",
                                        "Ficon_id": 2,
                                        "Fcondition_id": 13,
                                        "Ftemp": 27,
                                        "Fwspd": 10.08,
                                        "Fwind_dir_id": 8,
                                        "Ffeelslike": 34,
                                        "Fpredict_hour": 0,
                                        "Fhumidity": 93,
                                        "id": 892,
                                        "wind_degrees": "135",
                                        "Fcondition": "阴",
                                        "Fwdir": "SSE",
                                        "wind_level": 2
                                    },
                                    {
                                        "Fpredict_date": "2019-06-19",
                                        "Ficon_id": 2,
                                        "Fcondition_id": 13,
                                        "Ftemp": 27,
                                        "Fwspd": 9.72,
                                        "Fwind_dir_id": 8,
                                        "Ffeelslike": 31,
                                        "Fpredict_hour": 1,
                                        "Fhumidity": 94,
                                        "id": 892,
                                        "wind_degrees": "135",
                                        "Fcondition": "阴",
                                        "Fwdir": "SSE",
                                        "wind_level": 2
                                    },
                                    {
                                        "Fpredict_date": "2019-06-19",
                                        "Ficon_id": 2,
                                        "Fcondition_id": 13,
                                        "Ftemp": 27,
                                        "Fwspd": 9.36,
                                        "Fwind_dir_id": 8,
                                        "Ffeelslike": 31,
                                        "Fpredict_hour": 2,
                                        "Fhumidity": 95,
                                        "id": 892,
                                        "wind_degrees": "135",
                                        "Fcondition": "阴",
                                        "Fwdir": "SSE",
                                        "wind_level": 2
                                    },
                                    {
                                        "Fpredict_date": "2019-06-19",
                                        "Ficon_id": 2,
                                        "Fcondition_id": 13,
                                        "Ftemp": 27,
                                        "Fwspd": 9,
                                        "Fwind_dir_id": 8,
                                        "Ffeelslike": 31,
                                        "Fpredict_hour": 3,
                                        "Fhumidity": 95,
                                        "id": 892,
                                        "wind_degrees": "135",
                                        "Fcondition": "阴",
                                        "Fwdir": "SSE",
                                        "wind_level": 2
                                    },
                                    {
                                        "Fpredict_date": "2019-06-19",
                                        "Ficon_id": 33,
                                        "Fcondition_id": 15,
                                        "Ftemp": 27,
                                        "Fwspd": 8.28,
                                        "Fwind_dir_id": 8,
                                        "Ffeelslike": 31,
                                        "Fpredict_hour": 4,
                                        "Fhumidity": 94,
                                        "id": 892,
                                        "wind_degrees": "135",
                                        "Fcondition": "阵雨",
                                        "Fwdir": "SSE",
                                        "wind_level": 2
                                    },
                                    {
                                        "Fpredict_date": "2019-06-19",
                                        "Ficon_id": 33,
                                        "Fcondition_id": 15,
                                        "Ftemp": 27,
                                        "Fwspd": 7.56,
                                        "Fwind_dir_id": 8,
                                        "Ffeelslike": 31,
                                        "Fpredict_hour": 5,
                                        "Fhumidity": 89,
                                        "id": 892,
                                        "wind_degrees": "135",
                                        "Fcondition": "阵雨",
                                        "Fwdir": "SSE",
                                        "wind_level": 2
                                    },
                                    {
                                        "Fpredict_date": "2019-06-19",
                                        "Ficon_id": 1,
                                        "Fcondition_id": 8,
                                        "Ftemp": 27,
                                        "Fwspd": 7.56,
                                        "Fwind_dir_id": 8,
                                        "Ffeelslike": 34,
                                        "Fpredict_hour": 6,
                                        "Fhumidity": 89,
                                        "id": 892,
                                        "wind_degrees": "135",
                                        "Fcondition": "多云",
                                        "Fwdir": "SSE",
                                        "wind_level": 2
                                    },
                                    {
                                        "Fpredict_date": "2019-06-19",
                                        "Ficon_id": 1,
                                        "Fcondition_id": 8,
                                        "Ftemp": 27,
                                        "Fwspd": 7.92,
                                        "Fwind_dir_id": 9,
                                        "Ffeelslike": 33,
                                        "Fpredict_hour": 7,
                                        "Fhumidity": 88,
                                        "id": 892,
                                        "wind_degrees": "180",
                                        "Fcondition": "多云",
                                        "Fwdir": "S",
                                        "wind_level": 2
                                    },
                                    {
                                        "Fpredict_date": "2019-06-19",
                                        "Ficon_id": 1,
                                        "Fcondition_id": 8,
                                        "Ftemp": 27,
                                        "Fwspd": 8.28,
                                        "Fwind_dir_id": 9,
                                        "Ffeelslike": 38,
                                        "Fpredict_hour": 8,
                                        "Fhumidity": 94,
                                        "id": 892,
                                        "wind_degrees": "180",
                                        "Fcondition": "多云",
                                        "Fwdir": "S",
                                        "wind_level": 2
                                    },
                                    {
                                        "Fpredict_date": "2019-06-19",
                                        "Ficon_id": 2,
                                        "Fcondition_id": 13,
                                        "Ftemp": 27,
                                        "Fwspd": 10.08,
                                        "Fwind_dir_id": 9,
                                        "Ffeelslike": 38,
                                        "Fpredict_hour": 9,
                                        "Fhumidity": 93,
                                        "id": 892,
                                        "wind_degrees": "180",
                                        "Fcondition": "阴",
                                        "Fwdir": "S",
                                        "wind_level": 2
                                    },
                                    {
                                        "Fpredict_date": "2019-06-19",
                                        "Ficon_id": 2,
                                        "Fcondition_id": 13,
                                        "Ftemp": 27,
                                        "Fwspd": 11.88,
                                        "Fwind_dir_id": 9,
                                        "Ffeelslike": 41,
                                        "Fpredict_hour": 10,
                                        "Fhumidity": 91,
                                        "id": 892,
                                        "wind_degrees": "180",
                                        "Fcondition": "阴",
                                        "Fwdir": "S",
                                        "wind_level": 0
                                    },
                                    {
                                        "Fpredict_date": "2019-06-19",
                                        "Ficon_id": 2,
                                        "Fcondition_id": 13,
                                        "Ftemp": 27,
                                        "Fwspd": 13.68,
                                        "Fwind_dir_id": 10,
                                        "Ffeelslike": 37,
                                        "Fpredict_hour": 11,
                                        "Fhumidity": 91,
                                        "id": 892,
                                        "wind_degrees": "225",
                                        "Fcondition": "阴",
                                        "Fwdir": "SSW",
                                        "wind_level": 3
                                    }
                                ],
                                "sunset": {
                                    "date": "2019-06-18",
                                    "sunrise": "2019-06-19 05:40:00",
                                    "sundown": "2019-06-18 19:10:00",
                                    "sunrise_h": "05",
                                    "sundown_h": "07"
                                }
                            };
                            let count = data.hour24.length
                            resolve({
                                data,
                                count
                            })
                        });
                })
            }
        }
    }
</script>