var list = [];
var data = [];
$(document).ready(function () {
    $(".InputNumber").kendoNumericTextBox();
    $(window).on("resize", function () {        
        $("#barChart").data("kendoChart").refresh();
        $("#pieChart").data("kendoChart").refresh();
    });
    $(".InputNumber").change(function () {

        if (this.id != "") {
            var Splitted = (this.id).split("-");
            var key = Splitted[0];
            var value = Splitted[1];
            if (key == "Male") {
                var FemaleMadeId = "Female-" + value;
                var PopulationMadeId = "Population-" + value;

                //check if input value is empty

                if ($('#' + this.id).val() == "") {
                    $('#' + this.id).val("0");
                    $('#' + this.id).data("kendoNumericTextBox").value("0");
                }

                // check if entered value is max and min value
                
                if (parseInt($('#' + this.id).val()) > parseInt($('#' + PopulationMadeId).val()) || parseInt($('#' + this.id).val()) < 0) {
                    $('#' + this.id).val(($('#' + PopulationMadeId).val()));
                    $('#' + this.id).data("kendoNumericTextBox").value(($('#' + PopulationMadeId).val()));

                    $('#' + FemaleMadeId).val("0");
                    $('#' + FemaleMadeId).data("kendoNumericTextBox").value("0");
                }
                else {
                    $('#' + FemaleMadeId).val(($('#' + PopulationMadeId).val() - $('#' + this.id).val()));
                    $('#' + FemaleMadeId).data("kendoNumericTextBox").value(($('#' + PopulationMadeId).val() - $('#' + this.id).val()));
                }

                //update populationlist and refresh chart
                var maleValueKey = parseInt(value) - 1;

                populationList[maleValueKey].Male = $('#' + this.id).val();
                populationList[maleValueKey].Female = $('#' + FemaleMadeId).val();
                $("#barChart").data("kendoChart").dataSource.read();               

            }
            else if (key == "Female") {
                var MaleMadeId = "Male-" + value;
                var PopulationMadeId = "Population-" + value;

                //check if input value is empty

                if ($('#' + this.id).val() == "") {
                    $('#' + this.id).val("0");
                    $('#' + this.id).data("kendoNumericTextBox").value("0");
                }

                // check if entered value is max and min value

                if (parseInt($('#' + this.id).val()) > parseInt($('#' + PopulationMadeId).val()) || parseInt($('#' + this.id).val()) < 0) {
                    $('#' + this.id).val(($('#' + PopulationMadeId).val()));
                    $('#' + this.id).data("kendoNumericTextBox").value(($('#' + PopulationMadeId).val()));

                    $('#' + MaleMadeId).val("0");
                    $('#' + MaleMadeId).data("kendoNumericTextBox").value("0");
                }
                else {
                    $('#' + MaleMadeId).val(($('#' + PopulationMadeId).val() - $('#' + this.id).val()));
                    $('#' + MaleMadeId).data("kendoNumericTextBox").value(($('#' + PopulationMadeId).val() - $('#' + this.id).val()));
                }

                var femaleValueKey = parseInt(value) - 1;
                //update populationlist and refresh chart
                populationList[femaleValueKey].Male = $('#' + MaleMadeId).val(); 
                populationList[femaleValueKey].Female = $('#' + this.id).val();
                $("#barChart").data("kendoChart").dataSource.read();

            }
            else if (key == "Veg") {
                var NonVegMadeId = "NonVeg-" + value;
                var PopulationMadeId = "Population-" + value;

                //check if input value is empty

                if ($('#' + this.id).val() == "") {
                    $('#' + this.id).val("0");
                    $('#' + this.id).data("kendoNumericTextBox").value("0");
                }
                
                // check if entered value is max and min value

                if (parseInt($('#' + this.id).val()) > parseInt($('#' + PopulationMadeId).val()) || parseInt($('#' + this.id).val()) < 0) {
                    $('#' + this.id).val(($('#' + PopulationMadeId).val()));
                    $('#' + this.id).data("kendoNumericTextBox").value(($('#' + PopulationMadeId).val()));

                    $('#' + NonVegMadeId).val("0");
                    $('#' + NonVegMadeId).data("kendoNumericTextBox").value("0");
                }
                else {
                    $('#' + NonVegMadeId).val(($('#' + PopulationMadeId).val() - $('#' + this.id).val()));
                    $('#' + NonVegMadeId).data("kendoNumericTextBox").value(($('#' + PopulationMadeId).val() - $('#' + this.id).val()));
                }

                var vegValueKey = parseInt(value) - 1;
                //update populationlist and refresh chart
                populationList[vegValueKey].Veg = $('#' + this.id).val();
                populationList[vegValueKey].NonVeg = $('#' + NonVegMadeId).val();
                $("#barChart").data("kendoChart").dataSource.read();

                if (populationList[value - 1].City == dataVegNonVeg[0].City) {
                    //update dataVegNonVeg and refresh chart
                    dataVegNonVeg[1].valueKey = $('#' + NonVegMadeId).val();
                    dataVegNonVeg[0].valueKey = $('#' + this.id).val();
                    $("#pieChart").data("kendoChart").dataSource.read();
                }
            }
            else if (key == "NonVeg") {
                var VegMadeId = "Veg-" + value;
                var PopulationMadeId = "Population-" + value;

                //check if input value is empty

                if ($('#' + this.id).val() == "") {
                    $('#' + this.id).val("0");
                    $('#' + this.id).data("kendoNumericTextBox").value("0");
                }
                
                // check if entered value is max and min value

                if (parseInt($('#' + this.id).val()) > parseInt($('#' + PopulationMadeId).val()) || parseInt($('#' + this.id).val()) < 0) {
                    $('#' + this.id).val(($('#' + PopulationMadeId).val()));
                    $('#' + this.id).data("kendoNumericTextBox").value(($('#' + PopulationMadeId).val()));

                    $('#' + VegMadeId).val("0");
                    $('#' + VegMadeId).data("kendoNumericTextBox").value("0");
                }
                else {
                    $('#' + VegMadeId).val(($('#' + PopulationMadeId).val() - $('#' + this.id).val()));
                    $('#' + VegMadeId).data("kendoNumericTextBox").value(($('#' + PopulationMadeId).val() - $('#' + this.id).val()));
                }

                var nonvegValueKey = parseInt(value) - 1;
              
                //update populationlist and refresh chart
                populationList[nonvegValueKey].NonVeg = $('#' + this.id).val();
                populationList[nonvegValueKey].Veg = $('#' + VegMadeId).val();
                $("#barChart").data("kendoChart").dataSource.read();

                if (populationList[value - 1].City == dataVegNonVeg[0].City) {
                    //update dataVegNonVeg and refresh chart
                    dataVegNonVeg[1].valueKey = $('#' + this.id).val();
                    dataVegNonVeg[0].valueKey = $('#' + VegMadeId).val();
                    $("#pieChart").data("kendoChart").dataSource.read();
                }

            }
        }

    });

    var populationList = [
        {
            "Female": "30",
            "Male": "70",
            "Veg": "75",
            "NonVeg": "25",
            "City": "Delhi"
        },
        {
            "Female": "150",
            "Male": "50",
            "Veg": "190",
            "NonVeg": "10",
            "City": "Panchkula"
        },
        {
            "Female": "130",
            "Male": "70",
            "Veg": "50",
            "NonVeg": "150",
            "City": "Pune"

        },
        {
            "Female": "140",
            "Male": "160",
            "Veg": "170",
            "NonVeg": "130",
            "City": "Bangalore"
        },
        {
            "Female": "175",
            "Male": "25",
            "Veg": "70",
            "NonVeg": "130",
            "City": "Ambala"
        },
        {
            "Female": "80",
            "Male": "20",
            "Veg": "55",
            "NonVeg": "45",
            "City": "Amritsar"
        },
        {
            "Female": "130",
            "Male": "170",
            "Veg": "170",
            "NonVeg": "130",
            "City": "Patna"
        }
        , {
            "Female": "137",
            "Male": "63",
            "Veg": "70",
            "NonVeg": "130",
            "City": "Chappra"
        },
        {
            "Female": "55",
            "Male": "45",
            "Veg": "40",
            "NonVeg": "60",
            "City": "Panjim"
        },
        {
            "Female": "230",
            "Male": "170",
            "Veg": "245",
            "NonVeg": "155",
            "City": "Hyderabad"
        }
    ];

    //*******************************************Pie Chart**********************************
    dataVegNonVeg = [
           {
               "source": "Veg",
               "valueKey": 75,
               "City": "Delhi"
           },
           {
               "source": "Non-Veg",
               "valueKey": 25,
               "City": "Delhi"
           }
    ];

    function createPieChart() {
        $("#pieChart").kendoChart({
            title: {
                text: "Veg/Non-veg population in " + dataVegNonVeg[0].City
            },
            legend: {
                position: "top"
            },
            chartArea: {
                background: ""
            },
            dataSource: {
                data: dataVegNonVeg
            },
            seriesDefaults: {
                labels:
                        {
                            template: "#= category #",
                            position: "center",
                            visible: true,
                            font: "12px Arial",
                            background: "transparent"
                        }
            },
            series: [{
                type: "pie",
                field: "valueKey",
                categoryField: "source",
            }],
            seriesColors: ["#9DE219", "#006634"],
            tooltip: {
                visible: true,
                template: "${ category }" + " Population : " + " ${ dataItem.valueKey }M"
            }
        });
    }

    $(document).ready(createPieChart);
    $(document).bind("kendo:skinChange", createPieChart);

    //**************************************************************************************

    //*******************************************Bar Chart**********************************
    var maleColor = "#ffd600";
    var femaleColor = "#F8766D";
    function createChart() {
        $("#barChart").kendoChart({
            dataSource: {
                data: populationList
            },
            chartArea: {
                background: ""
            },
            dataBound: function () {
                if ($("#barChart").width() < 570) {
                    $("#barChart").data("kendoChart").options.categoryAxis.labels.rotation = -90;
                } else {
                    $("#barChart").data("kendoChart").options.categoryAxis.labels.rotation = 0;
                }
            },
            title: {
                text: "Population graph of various cities"
            },
            legend: {
                position: "top"
            },
            seriesDefaults: {
                type: "column",
                labels: {
                    visible: true,
                    background: "transparent"
                }
            },
            series: [
            {
                field: "Male",
                name:"Male",
                color: "#00BFC4"
            },
            {
                field: "Female",
                name: "Female",
                color: "#F8766D"
            }
            ],
            seriesClick: function(e) {
                dataVegNonVeg[0].valueKey = e.dataItem.Veg;
                dataVegNonVeg[1].valueKey = e.dataItem.NonVeg;
                dataVegNonVeg[0].City = e.dataItem.City;
                dataVegNonVeg[1].City = e.dataItem.City;
                $("#pieChart").data("kendoChart").dataSource.read();

                var chartTemp = $("#pieChart").data("kendoChart");
                chartTemp.setOptions({
                    title: {
                        text: "Veg/Non-Veg population in " + e.dataItem.City
                    }
                });

                chartTemp.redraw();
            },
            valueAxis: {
                labels: {
                    format: "{0}"                   
                },
                title: {
                    text: "Population in Million"
                },
                line: {
                    visible: true
                },
                axisCrossingValue: 0
            },
            categoryAxis: {
                categories: ["Delhi", "Panchkula", "Pune", "Bangalore", "Ambala", "Amritsar", "Patna", "Chappra", "Panjim", "Hyderabad"],
                line: {
                    visible: true
                },
                title: {
                    text: "Major Cities"
                },
                labels: {
                    format: "{0}"
                },
            },
            tooltip: {
                visible: true,
                format: "{0}%",
                template: "#= series.field #: #= value #" + "M" + "<br>Population #= parseInt(dataItem.Male)+parseInt(dataItem.Female) #"+"M"
            }
        });
                
    }

    $(document).ready(createChart);
    $(document).bind("kendo:skinChange", createChart);
   
    
    
    //**************************************************************************************

    //******************************************Color Picker Code***************************

    $('#bodyColorPicker').colorpicker({ color: '#FFFCAD', align: 'left' }).on('changeColor', function (e) {
        $('body')[0].style.backgroundColor = e.color.toHex();
        });

    //**************************************************************************************
});