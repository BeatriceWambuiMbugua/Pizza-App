$(function(){
    $('.summary').hide();
    $('.cdata-overlay').hide();
    $("#checkout").click(function(){
        let flavour = $(".flavour option:selected").val();
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let topping = $("#toppings option:selected").val();
        let number = $("#number").val();
        console.log(size);

        let order = (f, s, c, t, n, total) => {
            return {f, s, c, t, n, total};
        };

        let price, totalPrice;
        switch(flavour){
            case flavour = "chickenhawaiian":
                switch (size){
                    case size = "regular":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                        case size = "medium":
                            price = 900;
                            if (crust === "thin") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "thick") {
                                totalPrice = (price * number) + 250;
                            } else if (crust === "flatbread") {
                                totalPrice = (price * number) + 280;
                            } else {
                                totalPrice = (price * number) + 280;
                            }
                            break;
                        case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
                case flavour = "meatdeluxe":
                    switch (size){
                        case size = "regular":
                            price = 600;
                            if (crust === "thin") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "thick") {
                                totalPrice = (price * number) + 250;
                            } else if (crust === "flatbread") {
                                totalPrice = (price * number) + 280;
                            } else {
                                totalPrice = (price * number) + 280;
                            }
                            break;
                            case size = "medium":
                                price = 900;
                                if (crust === "thin") {
                                    totalPrice = (price * number) + 150;
                                } else if (crust === "thick") {
                                    totalPrice = (price * number) + 250;
                                } else if (crust === "flatbread") {
                                    totalPrice = (price * number) + 280;
                                } else {
                                    totalPrice = (price * number) + 280;
                                }
                                break;
                            case size = "large":
                            price = 1200;
                            if (crust === "thin") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "thick") {
                                totalPrice = (price * number) + 250;
                            } else if (crust === "flatbread") {
                                totalPrice = (price * number) + 280;
                            } else {
                                totalPrice = (price * number) + 280;
                            }
                            break;
                    }
                    break;
                    case flavour = "spicyboerewors":
                        switch (size){
                            case size = "regular":
                                price = 600;
                                if (crust === "thin") {
                                    totalPrice = (price * number) + 150;
                                } else if (crust === "thick") {
                                    totalPrice = (price * number) + 250;
                                } else if (crust === "flatbread") {
                                    totalPrice = (price * number) + 280;
                                } else {
                                    totalPrice = (price * number) + 280;
                                }
                                break;
                                case size = "medium":
                                    price = 900;
                                    if (crust === "thin") {
                                        totalPrice = (price * number) + 150;
                                    } else if (crust === "thick") {
                                        totalPrice = (price * number) + 250;
                                    } else if (crust === "flatbread") {
                                        totalPrice = (price * number) + 280;
                                    } else {
                                        totalPrice = (price * number) + 280;
                                    }
                                    break;
                                case size = "large":
                                price = 1200;
                                if (crust === "thin") {
                                    totalPrice = (price * number) + 150;
                                } else if (crust === "thick") {
                                    totalPrice = (price * number) + 250;
                                } else if (crust === "flatbread") {
                                    totalPrice = (price * number) + 280;
                                } else {
                                    totalPrice = (price * number) + 280;
                                }
                                break;
                        }
                        break;
                        case flavour = "beefpepperoni":
                        switch (size){
                            case size = "regular":
                                price = 600;
                                if (crust === "thin") {
                                    totalPrice = (price * number) + 150;
                                } else if (crust === "thick") {
                                    totalPrice = (price * number) + 250;
                                } else if (crust === "flatbread") {
                                    totalPrice = (price * number) + 280;
                                } else {
                                    totalPrice = (price * number) + 280;
                                }
                                break;
                                case size = "medium":
                                    price = 900;
                                    if (crust === "thin") {
                                        totalPrice = (price * number) + 150;
                                    } else if (crust === "thick") {
                                        totalPrice = (price * number) + 250;
                                    } else if (crust === "flatbread") {
                                        totalPrice = (price * number) + 280;
                                    } else {
                                        totalPrice = (price * number) + 280;
                                    }
                                    break;
                                case size = "large":
                                price = 1200;
                                if (crust === "thin") {
                                    totalPrice = (price * number) + 150;
                                } else if (crust === "thick") {
                                    totalPrice = (price * number) + 250;
                                } else if (crust === "flatbread") {
                                    totalPrice = (price * number) + 280;
                                } else {
                                    totalPrice = (price * number) + 280;
                                }
                                break;
                        }
                        break;
                        case flavour = "bbqsteak":
                        switch (size){
                            case size = "regular":
                                price = 600;
                                if (crust === "thin") {
                                    totalPrice = (price * number) + 150;
                                } else if (crust === "thick") {
                                    totalPrice = (price * number) + 250;
                                } else if (crust === "flatbread") {
                                    totalPrice = (price * number) + 280;
                                } else {
                                    totalPrice = (price * number) + 280;
                                }
                                break;
                                case size = "medium":
                                    price = 900;
                                    if (crust === "thin") {
                                        totalPrice = (price * number) + 150;
                                    } else if (crust === "thick") {
                                        totalPrice = (price * number) + 250;
                                    } else if (crust === "flatbread") {
                                        totalPrice = (price * number) + 280;
                                    } else {
                                        totalPrice = (price * number) + 280;
                                    }
                                    break;
                                case size = "large":
                                price = 1200;
                                if (crust === "thin") {
                                    totalPrice = (price * number) + 150;
                                } else if (crust === "thick") {
                                    totalPrice = (price * number) + 250;
                                } else if (crust === "flatbread") {
                                    totalPrice = (price * number) + 280;
                                } else {
                                    totalPrice = (price * number) + 280;
                                }
                                break;
                        }
                        break;
                        case flavour = "chickenmushroom":
                        switch (size){
                            case size = "regular":
                                price = 600;
                                if (crust === "thin") {
                                    totalPrice = (price * number) + 150;
                                } else if (crust === "thick") {
                                    totalPrice = (price * number) + 250;
                                } else if (crust === "flatbread") {
                                    totalPrice = (price * number) + 280;
                                } else {
                                    totalPrice = (price * number) + 280;
                                }
                                break;
                                case size = "medium":
                                    price = 900;
                                    if (crust === "thin") {
                                        totalPrice = (price * number) + 150;
                                    } else if (crust === "thick") {
                                        totalPrice = (price * number) + 250;
                                    } else if (crust === "flatbread") {
                                        totalPrice = (price * number) + 280;
                                    } else {
                                        totalPrice = (price * number) + 280;
                                    }
                                    break;
                                case size = "large":
                                price = 1200;
                                if (crust === "thin") {
                                    totalPrice = (price * number) + 150;
                                } else if (crust === "thick") {
                                    totalPrice = (price * number) + 250;
                                } else if (crust === "flatbread") {
                                    totalPrice = (price * number) + 280;
                                } else {
                                    totalPrice = (price * number) + 280;
                                }
                                break;
                        }
                        break;
                        case flavour = "vegfeast":
                        switch (size){
                            case size = "regular":
                                price = 600;
                                if (crust === "thin") {
                                    totalPrice = (price * number) + 150;
                                } else if (crust === "thick") {
                                    totalPrice = (price * number) + 250;
                                } else if (crust === "flatbread") {
                                    totalPrice = (price * number) + 280;
                                } else {
                                    totalPrice = (price * number) + 280;
                                }
                                break;
                                case size = "medium":
                                    price = 900;
                                    if (crust === "thin") {
                                        totalPrice = (price * number) + 150;
                                    } else if (crust === "thick") {
                                        totalPrice = (price * number) + 250;
                                    } else if (crust === "flatbread") {
                                        totalPrice = (price * number) + 280;
                                    } else {
                                        totalPrice = (price * number) + 280;
                                    }
                                    break;
                                case size = "large":
                                price = 1200;
                                if (crust === "thin") {
                                    totalPrice = (price * number) + 150;
                                } else if (crust === "thick") {
                                    totalPrice = (price * number) + 250;
                                } else if (crust === "flatbread") {
                                    totalPrice = (price * number) + 280;
                                } else {
                                    totalPrice = (price * number) + 280;
                                }
                                break;
                        }
                        break;
                        case flavour = "chickenmacon":
                            switch (size){
                                case size = "regular":
                                    price = 600;
                                    if (crust === "thin") {
                                        totalPrice = (price * number) + 150;
                                    } else if (crust === "thick") {
                                        totalPrice = (price * number) + 250;
                                    } else if (crust === "flatbread") {
                                        totalPrice = (price * number) + 280;
                                    } else {
                                        totalPrice = (price * number) + 280;
                                    }
                                    break;
                                    case size = "medium":
                                        price = 900;
                                        if (crust === "thin") {
                                            totalPrice = (price * number) + 150;
                                        } else if (crust === "thick") {
                                            totalPrice = (price * number) + 250;
                                        } else if (crust === "flatbread") {
                                            totalPrice = (price * number) + 280;
                                        } else {
                                            totalPrice = (price * number) + 280;
                                        }
                                        break;
                                    case size = "large":
                                    price = 1200;
                                    if (crust === "thin") {
                                        totalPrice = (price * number) + 150;
                                    } else if (crust === "thick") {
                                        totalPrice = (price * number) + 250;
                                    } else if (crust === "flatbread") {
                                        totalPrice = (price * number) + 280;
                                    } else {
                                        totalPrice = (price * number) + 280;
                                    }
                                    break;
                            }
                            break;
        };
        switch (topping){
            case topping = "tomato":
                totalPrice = totalPrice + 80;
                break;
            case topping = "onions":
                totalPrice = totalPrice + 80;
                break;
            case topping = "veggiesalad":
                totalPrice = totalPrice + 80;
                break;
            case topping = "greenpepper":
                totalPrice = totalPrice + 80;
                break;
            case topping = "olives":
                totalPrice = totalPrice + 120;
                break;
            case topping = "pineapple":
                totalPrice = totalPrice + 120;
                break;
            case topping = "macon":
                totalPrice = totalPrice + 120;
                break;
            case topping = "mince":
                totalPrice = totalPrice + 120;
                break;
            case topping = "beef":
                totalPrice = totalPrice + 180;
                break;
            case topping = "chicken":
                totalPrice = totalPrice + 180;
                break;
        };


    });
});