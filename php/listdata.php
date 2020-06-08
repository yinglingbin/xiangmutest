<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:POST/GET');

include "conn.php";
$sql = "select * from goods";
$result = $conn->query($sql);
$arr = array();
for ($i = 0;$i < $result->num_rows;$i++){
    $arr[$i] = $result->fetch_assoc();
}
echo json_encode($arr);