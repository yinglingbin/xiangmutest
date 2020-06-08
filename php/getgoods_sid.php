<?php
include "conn.php";
if(isset($_GET['goods_id'])){
    $goods_id = $_GET['goods_id'];
    $result = $conn->query("select * from goods where goods_id=$goods_id");
    echo json_encode($result->fetch_assoc());
}