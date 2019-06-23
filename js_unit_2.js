function pointSearch() {
	points = {'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F':6, 'G': 7, 'H': 8};
	// из input получаем значение точки на шахматной доске
	var startPoint = document.getElementById('startPoint').value;
	// получаем значение по оси X
	var x = startPoint.charAt(0).toUpperCase();
	// получаем значение по оси Y
	var y = Number(startPoint.charAt(1));

	var allKeys = Object.keys(points);
	var counterX = 0;
	var counterY = 0;

	for(var i = 0; i < 9; i++) {
		if(x == allKeys[i]) {
			counterX++;
		}
		if(y == points[allKeys[i]]) {
			counterY++;
		}
	}

	if(counterX != 0 && counterY != 0) {
		var newX = points[x];
		var allPoints = {};

		allPoints.point1 = [newX+1, y+2];
		allPoints.point2 = [newX+2, y+1];
		allPoints.point3 = [newX+2, y-1];
		allPoints.point4 = [newX+1, y-2];
		allPoints.point5 = [newX-1, y-2];
		allPoints.point6 = [newX-2, y-1];
		allPoints.point7 = [newX-2, y+1];
		allPoints.point8 = [newX-1, y+2];
		var strPoint = "";

		for(var i = 1; i < 9; i++) {
			var key = "point" + i;
			var j = 1;
			if ((allPoints[key][0] > 0 && allPoints[key][1] > 0) && (allPoints[key][0] < 9 && allPoints[key][1] < 9)) {
				allPoints[key][0] = rename(allPoints[key][0]);
				strPoint = strPoint + allPoints[key][0] + allPoints[key][1] + " ";
			}
		}
		alert("Ваш конь может походить в точки \n \n"+ strPoint);
	} else {
		alert("Неверное значение")
	}
}

function rename(name) {
	// Создаю массив ключей и по новеру получаю нужный ключ
	var allKeys = Object.keys(points);
	return allKeys[name - 1];
}