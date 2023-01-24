var depomax = {

    calculadora: {
        ini: function(a) {
            ini_calculadora();
         
        }
    },
    boxes: {
        ini: function(a) {
            cal_boxes();
          
            cupon();
            imprimir()
        }
    }
};

function sesion_cal() {
    var h, j, o, l, k, m, n;
    h = "";
    m = "";
    o = 0;
    j = 0;
    $("#car a").each(function() {
        l = $(this).attr("class").substring(1);
        m += "," + $(this).children(".nom").html();
        k = l.split("_");
        h += ",[" + k + "]"
    });
    m = encodeURI(m);
    n = "ca=" + h.substring(1) + "&te=" + m.substring(1);
}

function seleccion() {
    var f, j, g, h, k;
    k = "";
    j = ca.length;
    pa = "img/cal/";
    for (i = 0; i < j; i++) {
        g = ca[i][0];
        h = ca[i][1];
        k += '<a href="" class="c' + g + "_" + h + '"><img src="' + pa + ambientes[g][1][h][1] + '" width="122" height="122"/><span class="nom">' + ambientes[g][1][h][0] + '</span><span class="ob_v">' + ambientes[g][1][h][2] + "</span></a>"
    }
    $("#car").prepend(k);
    $("#car a").click(function(a) {
        a.preventDefault();
        $(this).remove();
        recalcular()
    });
    recalcular()
}

function borrar_seleccion() {
    var b;
    $("#car").html("");
    b = "bo=1";
   
    recalcular()
}

function cal_boxes() {
    var n, j, h, k, m, l, o;
    $("#vol").html("");
    $("#pre_s").html("");
    $("#pre_e").html("");
    l = 0;
    k = boxes.length;
    for (i = 0; i < k; i++) {
        $("#box2").css("display", "none");
        $("#box22").css("display", "none");
        if (boxes[i][0].toFixed(2) >= tot_esp) {
            $(".vol").html(boxes[i][0].toFixed(2));
            $("#pre_s").html(boxes[i][1].toFixed(0));
            $("#pre_e").html(boxes[i][2].toFixed(0));
            $(".box_n").html(boxes[i][3]);
            $("#esp_s").attr("value", boxes[i][3]);
            $("#v_st").attr("value", boxes[i][1].toFixed(0));
            $("#v_ec").attr("value", boxes[i][2].toFixed(0));
            l = 1;
			
            return false
        }
    }
    if (l == 0) {
        mayor = boxes[k - 1][0].toFixed(2);
        ent = parseInt(tot_esp.toFixed(2) / mayor);
        o = tot_esp.toFixed(2) - (mayor * ent);
        $("#canb").val(ent);
        $(".vol").html(boxes[k - 1][0].toFixed(2));
        $("#pre_u").val(boxes[k - 1][1]);
        $("#pre_u2").val(boxes[k - 1][2]);
        $("#p_uni_s").html(boxes[k - 1][1]);
        $("#p_uni_e").html(boxes[k - 1][2]);
        $("#pre_s").html((boxes[k - 1][1] * ent).toFixed(0));
        $("#pre_e").html((boxes[k - 1][2] * ent).toFixed(0));
        $(".box_n").html(ent + " " + boxes[k - 1][3]);
        $("#esp_s").attr("value", boxes[k - 1][3]);
        $("#v_st").attr("value", boxes[k - 1][1].toFixed(0) * ent);
        $("#v_ec").attr("value", boxes[k - 1][2].toFixed(0) * ent);
        $(".p_uni").css("display", "block");
        if (o > 0) {
            for (i = 0; i < k; i++) {
                if (boxes[i][0].toFixed(2) >= o) {
                    $(".vol2").html(boxes[i][0].toFixed(2));
                    $("#pre_s2").html(boxes[i][1].toFixed(0));
                    $("#pre_e2").html(boxes[i][2].toFixed(0));
                    $(".box_n2").html(boxes[i][3]);
                    $("#esp_s2").attr("value", boxes[i][3]);
                    $("#v_st2").attr("value", boxes[i][1].toFixed(0));
                    $("#v_ec2").attr("value", boxes[i][2].toFixed(0));
                    l = 1;
                    $("#box2").css("display", "block");
                    $("#box22").css("display", "block");
                    return false
                }
            }
        }
    }
}





function contacto() {
    $("#bot_cont").click(function(s) {
        s.preventDefault();
        var q, r, o, e, w, x, u, p, t, y, v;
        q = 0;
        o = $("input#nombre").val();
        r = $("input#email").val();
        w = $("input#telefono").val();
        u = $("textarea#consulta").val();
        p = $("input#captcha").val();
        $("#form_c textarea").removeClass("alert");
        $("#form_c input").removeClass("alert");
        $("#res").html();
        if (o === "") {
            q = 1;
            $("#nombre").addClass("alert")
        }
        if (p === "") {
            q = 1;
            $("#captcha").addClass("alert")
        }
        if (u.length < 4) {
            q = 1;
            $("#consulta").addClass("alert")
        }
        if (w === "" || w.length < 8) {
            q = 1;
            $("#telefono").addClass("alert")
        }
        if (!IsValidEmail(r)) {
            $("#email").addClass("alert");
            q = 1
        }
        if (q == 1) {
            return false
        }
        v = "nombre=" + o + "&email=" + r + "&tel=" + w + "&consulta=" + u + "&cap=" + p;
      
    })
}
var data_imp;

function cupon() {
    fechas();
    $("#bot_cup").click(function(B) {
        B.preventDefault();
        var G, H, S, U, P, I, C, L, A, M, R, N, D, J, K, T, F, e, O, Q, E, z;
        G = 0;
        S = $("input#nombre").val();
        H = $("input#email").val();
        P = $("input#telefono").val();
        tipo = $("select#tipo").val();
        L = $("input#captcha").val();
        N = $("input#esp_s").val();
        D = $("input#v_st").val();
        J = $("input#v_ec").val();
        K = $("input#esp_n").val();
        codigo = $("input#codigo").val();
        esp_s2 = $("input#esp_s2").val();
        v_st2 = $("input#v_st2").val();
        v_ec2 = $("input#v_ec2").val();
        esp_n2 = $("input#esp_n2").val();
        canb = $("input#canb").val();
        pre_u = $("input#pre_u").val();
        pre_u2 = $("input#pre_u2").val();
        listado = encodeURI($("input#listado").val());
        if (tipo == "Standard") {
            T = $("#p_st").html();
            $("#p_uni_sel").html(pre_u)
        } else {
            if (tipo == "Economy") {
                T = $("#p_ec").html();
                $("#p_uni_sel").html(pre_u2);
                pre_u = pre_u2
            }
        }
        O = $("#p_em").html();
        Q = $("#p_ve").html();
        E = $("#vo").html();
        z = $("#vo2").html();
        $("#form_d select").removeClass("alert");
        $("#form_d input").removeClass("alert");
        $("#res").html();
        if (S === "") {
            G = 1;
            $("#nombre").addClass("alert")
        }
        if (P === "" || P.length < 8) {
            G = 1;
            $("#telefono").addClass("alert")
        }
        if (!IsValidEmail(H)) {
            $("#email").addClass("alert");
            G = 1
        }
        if (tipo === "0") {
            G = 1;
            $("#tipo").addClass("alert")
        }
        if (L === "") {
            G = 1;
            $("#captcha").addClass("alert")
        }
        if (G == 1) {
            return false
        }
        R = "nombre=" + S + "&email=" + H + "&tel=" + P + "&tipo=" + tipo + "&cap=" + L + "&esp_s=" + N + "&v_st=" + D + "&v_ec=" + J + "&esp_n=" + K + "&pa=" + T + "&vol=" + E + "&vol2=" + z + "&esp_s2=" + esp_s2 + "&v_st2=" + v_st2 + "&v_ec2=" + v_ec2 + "&esp_n2=" + esp_n2 + "&canb=" + canb + "&pre_u=" + pre_u + "&p_em=" + O + "&p_ve=" + Q + "&listado=" + listado;
       
    })
}

function fechas() {
    var p = new Date();
    var q = p.getDate();
    var j = p.getDate() - 1;
    var k = p.getDay();
    var o = p.getMonth() + 1;
    var m = p.getFullYear();
    var l = new Array(7);
    l[0] = "domingo";
    l[1] = "lunes";
    l[2] = "martes";
    l[3] = "mi&eacute;rcoles";
    l[4] = "jueves";
    l[5] = "viernes";
    l[6] = "s&aacute;bado";
    var n = new Array(12);
    n[1] = "enero";
    n[2] = "febrero";
    n[3] = "marzo";
    n[4] = "abril";
    n[5] = "mayo";
    n[6] = "junio";
    n[7] = "julio";
    n[8] = "agosto";
    n[9] = "septiembre";
    n[10] = "octubre";
    n[11] = "noviembre";
    n[12] = "diciembre";
    $("#p_em").html("Cup&oacute;n emitido el " + q + " de  " + n[o] + " de " + m);
    $("#p_ve").html("V&aacute;lido hasta el " + j + " de  " + n[o + 1] + " de " + m);
    $("#p_ve1").html(j + " de  " + n[o + 1] + " de " + m)
}

function ini_calculadora() {
    var c, d;
    c = ambientes.length;
    d = "";
    $("#nav_amb").html();
    for (i = 0; i < c; i++) {
        d += '<a href="">' + ambientes[i][0] + "</a>"
    }
    $("#nav_amb").prepend(d);
    $("#nav_amb a").click(function(a) {
        a.preventDefault();
        car_amb($(this).index())
    });
    $("#borrar").click(function(a) {
        a.preventDefault();
        borrar_seleccion()
    });
    car_amb(0)
}

function car_amb(h) {
    $("#amb").html("");
    $("#nav_amb").children("a").removeClass("cur");
    $("#nav_amb").children("a").eq(h).addClass("cur");
    $("#amb_tit").html(ambientes[h][0]);
    var f, a, g;
    a = "http://cityboxbarracas.com/calc/index_files/";
    f = ambientes[h][1].length;
    g = "";
    for (i = 0; i < f; i++) {
        g += '<a href="" class="c' + h + "_" + i + '"><img src="' + a + ambientes[h][1][i][1] + '" width="122" height="122"/><span class="nom">' + ambientes[h][1][i][0] + '</span> <span class="ob_v">' + ambientes[h][1][i][2] + "</span></a>"
    }
    $("#amb").prepend(g);
    $("#amb a").click(function(b) {
        b.preventDefault();
        car_ob($(this).index())
    })
}
var c_a = 0;

function car_ob(a) {
    if (c_a === 0) {
        c_a = 1;
        var d;
        d = $("#amb").children("a").eq(a);
        d.clone().prependTo("#car");
        $("#car").scrollTop(0);
        recalcular();
        des = $("#car").children("a").eq(0);
        des.css({
            display: "none",
            "background-color": "#FFF"
        });
        des.fadeIn();
        d.effect("transfer", {
            to: des
        }, 200, function() {
            des.animate({
                backgroundColor: "#f1f1f1"
            }, 300);
            c_a = 0;
            $("#car a").click(function(b) {
                b.preventDefault();
                $(this).remove();
                recalcular()
            })
        })
    }
}
$("#ver_box").click(function(c) {
    var d;
    d = Number($("#esp").html());
    if (d > 0) {
        recalcular();
      /*  sesion_cal(); */
        $(this).attr("href", "box-apropiado/" + d + "/")
    } else {
        c.preventDefault()
    }
});

function recalcular() {
    var f, g, h, e;
    f = $("#car");
    g = f.children("a").length;
    h = 0;
    for (i = 0; i < g; i++) {
        h += Number(f.children("a").eq(i).children(".ob_v").html())
    }
    e = ((h * 1.35) / 1.8).toFixed(2);
    sesion_cal();
    $("#esp").html(e)
	if ((e <= 5) && (e > 0.01)) {
		$("#TAM1").css('opacity', 1);
	} else {
		$("#TAM1").css('opacity', 0.1);
	}
    if ((e > 5) && (e <= 7)) {
		$("#TAM2").css('opacity', 1);
	} else {
		$("#TAM2").css('opacity', 0.1);
	}
    if ((e > 7)) {
		$("#TAM3").css('opacity', 1);
	} else {
		$("#TAM3").css('opacity', 0.1);
	}	
};