<?php
require_once("class.phpmailer.php");
require_once 'admin/dbConfig.php';


$current_file = basename($_SERVER['PHP_SELF']);

$server_path = str_replace($current_file , '' , 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'] ) ;


$branch = $_REQUEST['branch'];
$sql = "select * from branch where id = '$branch' ";
$query = $con->query($sql);
$row = mysqli_fetch_array($query);


$branch_q1 = $row['branch_question_1'];
$branch_q2 = $row['branch_question_2'];
$branch_q3 = $row['branch_question_3'];
$branch_q4 = $row['branch_question_4'];
$branch_q5 = $row['branch_question_5'];

$staff_q1 = $row['staff_question_1'];
$staff_q2 = $row['staff_question_2'];
$staff_q3 = $row['staff_question_3'];
$staff_q4 = $row['staff_question_4'];
$staff_q5 = $row['staff_question_5'];

$product_q1 = $row['product_question_1'];
$product_q2 = $row['product_question_2'];
$product_q3 = $row['product_question_3'];
$product_q4 = $row['product_question_4'];
$product_q5 = $row['product_question_5'];


$service_q1 = $row['service_question_1'];
$service_q2 = $row['service_question_2'];
$service_q3 = $row['service_question_3'];
$service_q4 = $row['service_question_4'];
$service_q5 = $row['service_question_5'];




$logo = $row['logo'];
$logo =  str_replace('../', '' , $logo) ;
//$branch_path = $row['folder_name'];
$email_logo = $server_path.$logo ;
//$email_logo = $_SERVER['HTTP_HOST'].'/uk/'.$logo ;




//todo : when submiting for branch q1 = effect, q2 = response , q3 = polite , q4 = look , q5 = appear...........for staff q1 = effect  ,  q2 = response   , q3 = polite , q4 = appear , q5  = ovrating ..........for product  q1 = effectiveness  ,  q2 = eae_of_use , q3 = features ,  q4  =  support  , q5  =  q5 = val_for_money ...we get questions from branch table and match with theses column..


$svv=1;

$sendchoice = mysqli_query($con, "SELECT sendto FROM branch where  id ='$branch'  ");


while($sc = mysqli_fetch_array($sendchoice))
{
    if( $sc['sendto'] == "1" )
    {
        $svv= 1;
        //echo " b_email";
    }
    else   if($sc['sendto'] == "2" )
    {
        $svv =  2 ;
        //echo  "b_database";

    }

    else
    {
        $svv =  3 ;
        // echo  "b_ed";
    }
}





  if (isset ($_REQUEST['type'])) {
      switch ($_REQUEST['type']) {
          case 'staff_rating':
              $staff_id = $_REQUEST['staff_id'];
              $effect = $_REQUEST['effect'];
              $response = $_REQUEST['response'];
              $polite = $_REQUEST['polite'];
              $appearance = $_REQUEST['appearance'];
              $staff_ova = $_REQUEST['staff_ova'];
              $overall = $_REQUEST['overall'];
              $staff_name = $_REQUEST['staff_name'];
              $user_session = $_REQUEST['user_session'];
              $comment = $_REQUEST['comment'];
              $thumb = $_REQUEST['thumb_type'];
              $date = date('Y-m-d');
              $total = $effect + $response + $polite + $appearance + $staff_ova + $overall;
            $staff_image = $_REQUEST['staff_image']  ;
              $staff_post = $_REQUEST['staff_post'];

              $branch = $_REQUEST['branch'];


    $sql = "INSERT INTO `staff_ratings`( `staffname`,   `effect`, `response`, `polite`, `appear`, `ovrating`, `comment`,  `date`, `session`, `staff_id` , `total_rating` , `staffpost` , `staffimage` , `thumbs` , `branch`) VALUES ('$staff_name' , '$effect' , '$response' , '$polite' , '$appearance' , '$staff_ova' , '$comment' , '$date' , '$user_session' , '$staff_id' , '$total' , '$staff_post' , '$staff_image' , '$thumb' , '$branch' )";

      $con->query($sql);


              break;

          case  'prod_rating' :

            $pro_id = $_REQUEST['pro_id']  ;

              $effect = $_REQUEST['effect']  ;
              $easy_to_use = $_REQUEST['easy_to_use']  ;
              $features = $_REQUEST['features']  ;
              $pro_support = $_REQUEST['pro_support']  ;
              $pro_money = $_REQUEST['pro_money']  ;
              $pro_over = $_REQUEST['pro_over']  ;
              $pro_name = $_REQUEST['pro_name']  ;
              $user_session = $_REQUEST['user_session']  ;
              $prod_comms = $_REQUEST['prod_comms']  ;
            $branch = $_REQUEST['branch'];
            $category = $_REQUEST['category'];
            $image = $_REQUEST['image'];
            $total = $effect + $easy_to_use + $features + $pro_support + $pro_money + $pro_over;

              $date = date('Y-m-d');
  $sql = "INSERT INTO `product_rating`( `pro_name`, `product_id`, `pro_branch`, `pro_category`,  `comment`, `date`, `rating`, `session`, `ease_of_use`, `features`, `effectiveness`, `support`, `val_for_money` , `total_rating` , `pro_image`) VALUES ('$pro_name' , '$pro_id' , '$branch' , '$category' , '$prod_comms' , '$date' , '$pro_over' , '$user_session' , '$easy_to_use' , '$features' , '$effect' , '$pro_support' ,'$pro_money' , '$total' , '$image' )";

            $con->query($sql);




              break;

          case 'two_step_rating':

              $branch = $_REQUEST['branch_id'];
              $effect = $_REQUEST['effect'];
              $response = $_REQUEST['response'];
              $polite = $_REQUEST['polite'];
              $look = $_REQUEST['look'];
              $appearance = $_REQUEST['appearance'];

              $overall = $_REQUEST['overall'];

              $user_session = $_REQUEST['user_session'];
              $comment = $_REQUEST['comment'];
              $thumb = $_REQUEST['thumb'];
              $date = date('Y-m-d');

              $date = date('Y-m-d');
              $day = date('D');
              $week = date('W');
              $time =  date('H:i:s');





                  $sql = "INSERT INTO `customer_info`( `firstname`, `surname`, `effect`, `response`, `polite`, `look`, `appear`, `ovrating`, `thumbs`, `date`,  `branch` , `session` , `complement` , `day` , `week` , `timevalue` ) VALUES ('Anonymous' , 'Anonymous' , '$effect' , '$response' , '$polite' , '$look' , '$appearance' , '$overall' , '$thumb' , '$date' , '$branch' , '$user_session' ,  '$comment' , '$day' , '$week' , '$time' ) ";







              $con->query($sql);


              $getBranch = "select * from branch WHERE  id = '$branch'";
              $query = $con->query($getBranch);
              while ($this_branch = mysqli_fetch_array($query)){
                  $br_name = $this_branch['branchName'];
                  $state1 = $this_branch['state'];
                  $addr = $this_branch['address'];
                  $total_like = $this_branch['likes'] + 1 ;
                  $total_dislike = $this_branch['dislikes'] + 1;
              }


              if($thumb === "like")
              {
                  $sql_like = mysqli_query($con,"INSERT INTO counter(`likes`, `dislikes`, `date`,`week`, `branch`)  VALUES('1','0','$date', '$week_no', '$branch') ");

                  $sql_add_like = mysqli_query($con,"UPDATE `branch` SET `likes` = $total_like WHERE  id = '$branch'");


              }


              else  if($thumb === "dislike")
              {

                  $sql_like = mysqli_query($con,"INSERT INTO counter(`likes`, `dislikes`, `date`,`week` , `branch`)  VALUES('0','1','$date', '$week_no' , '$branch') ");


                  $sql_add_dislike = mysqli_query($con,"UPDATE `branch` SET `dislikes` = $total_dislike WHERE  id = '$branch'");

              }

              $text_comment =   array("<span style='font-size:15px; font-weight:bold; border-radius:10px;  width:320px;  padding: 10px; color:white; background-color:rgb(217,83,79);'>1 Star = Terrible </span>",

                  "<span style='font-size:15px; font-weight:bold;border-radius:10px;   width:320px;  padding: 10px; color:white; background-color:rgb(240,173,78);'>2 Stars = Bad </span>",

                  "<span style='font-size:15px; font-weight:bold; border-radius:10px;   width:320px;  padding: 10px; color:white; background-color:rgb(91,192,222);'>3 Stars = Ok </span>",


                  "<span style='font-size:15px; font-weight:bold; border-radius:10px;   width:320px;  padding: 10px; color:white; background-color:rgb(66,139,202);'>4 Stars = Good </span>",


                  "<span style='font-size:15px; font-weight:bold; border-radius:10px;   width:320px;  padding: 10px; color:white; background-color:rgb(92,182,92);'> 5 Stars =  Awesome </span>"

              );





              $format = "<head><style>

 .ps{
	 width:100%;
	 float:;
 }
 .ps-im{
	 width:180px;
	 height:180px;
	 -moz-border-radius:50%;
	 -o-border-radius:50%;
	 -webkit-border-radius:50%;
	 border-radius:50%;

 }

 .ps-im img{
	 width:180px;
	 height:180px;
	 -moz-border-radius:50%;
	 -o-border-radius:50%;
	 -webkit-border-radius:50%;
	 border-radius:50%;
	 border:2px solid grey;
 }
 @media (min-width:320px) and (max-width:968px) {
	 .ps-im{
	 width:100px !important;
	 height:100px !important;
	 -moz-border-radius:50%;
	 -o-border-radius:50%;
	 -webkit-border-radius:50%;
	 border-radius:50%;

 }

 .ps-im img{
	 width:100px !important;
	 height:100px !important;

 }
 }
 .ps-rat{
	 width:78%;
	 float:right;
 }
table{
cellspacing='0'
}
table tr td{
	border-bottom:1px solid #CCC;
	padding:10px 0px 10px 0px;
}
</style>

</head> <body>";






              $format .= "<div id='' style='width:95%; color:#626262; height:auto; clear:both; font-family:Tahoma, Geneva, sans-serif; margin:auto; margin-top:2%; border:2px solid grey;'>
    <!------ Logo -------->
    <div style='margin-bottom:10px; padding:10px; text-align:center; border-bottom:1px solid grey; background: rgba(0, 0, 0, 0.3);'>
        <div style='width:30%; margin:auto; none repeat scroll 0% 0%; '> <img src='http://mooreadvice.com/likeornot/images/email_logo.jpg' /> </div>
    </div>";
              $format .= "<div style='margin-bottom:10px; text-align:center;'>
   <div style='margin:auto; width:45%;'> <img src='http://doyoulikeus.com/shared/images/smiley-icon/".$thumb."-b.fw.png' width='100%' />  </div>
 </div><div style='margin-bottom:10px;'>
        <div style='padding:10px; background:grey; font-size:24px; text-align:center; color:#FFF;'> Vote Received by  </div>
        <div style='text-align:center; padding:10px; font-size:16px;'>  Anonymous  <b> $thumb our services</b> ". date('Y/m/d') .  date('h:i:sa')."</div>
    </div>";
              $format .= "<div style='padding:10px; margin-bottom:10px; background:grey; font-size:24px; text-align:center; color:#FFF;'> Branch Name :     </div> <h3 style='text-align: center;'> $br_name  </h3> ";


              if($effect > 0 ) {
                  $format .= "<div style='padding:10px; background:grey; font-size:24px; text-align:center; color:#FFF;'> Customer's Rating on our performance:   </div>
   <div style=' margin-bottom:10px; padding:10px;'>

       <div style='clear:both;'>

          <div class='' style=''>
          <div style='margin-bottom:10px;'>


             <table width='100%' border='0' cellpadding='0' cellspacing='15'>
     <tr style='font-size:18px; '>
      <td width='50%' style=' color:;'> $branch_q1  </td>
      <td width='50%'><img src='http://doyoulikeus.com/shared/images/star_". $effect .".png' align='left'/>". $text_comment[$effect-1] ."</td>
     </tr>

     <tr style='font-size:18px; '>
      <td width='50%' style=' color:;'> $branch_q2   </td>
      <td width='50%'> <img src='http://doyoulikeus.com/shared/images/star_".$response.".png' align='left' />".$text_comment[$response-1]. "  </td>
     </tr>

     <tr style='font-size:18px; '>
      <td width='50%' style=' color:;'> $branch_q3  </td>
      <td width='50%'> <img src='http://doyoulikeus.com/shared/images/star_".$polite.".png' align='left' />". $text_comment[$polite-1]." </td>
     </tr>

     <tr style='font-size:18px; '>
      <td width='50%' style=' color:;'> $branch_q4 </td>
      <td width='50%'> <img src='http://doyoulikeus.com/shared/images/star_".$look.".png' align='left' />".$text_comment[$look-1] ." </td>
     </tr>

       <tr style='font-size:18px; '>
      <td width='50%' style=' color:;'> $branch_q5  </td>
      <td width='50%'><img src='http://doyoulikeus.com/shared/images/star_".$appearance.".png'  align='left'  />".$text_comment[$appearance-1] ." </td>
     </tr>

      <tr style='font-size:18px; '>
      <td width='50%' style=' color:;'>Overall Ratings</td>
      <td width='50%'><img src='http://doyoulikeus.com/shared/images/star_".$overall.".png'  align='left'  />".$text_comment[$overall-1]." </td>
     </tr>

      <tr style='font-size:18px; '>
      <td width='50%' style=' color:;'>Comment</td>
      <td width='50%'> $comment </td>
     </tr>



   </table>









    </div>

";

              }


              if($comm_complement != "" || $comm_compliant != "" || $comm_suggestion != "")
              {

                  $format .= "
          <div style='padding:10px; background:grey; font-size:24px; text-align:center; color:#FFF;'> Customer Comments  </div>
    <div style='padding:10px;'>
<table width='100%' border='0' cellpadding='0' cellspacing='0'>
     <tr style='font-size:18px; '>
      <td width='50%' style=' color:grey;'>Suggestion :  </td>
      <td width='50%'>$comm_suggestion</td>
     </tr>

     <tr style='font-size:18px; '>
      <td width='50%' style=' color:grey;'> Complaint :   </td>
      <td width='50%'> $comm_compliant </td>
     </tr>

     <tr style='font-size:18px; '>
      <td width='50%' style=' color:grey;'> Compliment :  </td>
      <td width='50%'> $comm_complement  </td>
     </tr>

   </table>



    </div>

         ";

              }




              $format.=" <div style='height:40px; width:100%; color:white; background-color:grey; font-size:25px; text-align:center; border-radius:10px;' >".

                  "Statistics: ".

                  "</div>";


              $stats = mysqli_query($con,"SELECT * FROM counter WHERE date='$date' AND likes='1' AND branch = '$branch'");
              $statsd = mysqli_query($con,"SELECT * FROM counter WHERE date='$date' AND dislikes='1' AND branch = '$branch' ");

              $likes=0;
              $dislikes=0;


              while($s = mysqli_fetch_array($stats))
              {

                  $likes++;
                  // $format.="<div>".$s['dislikes']."  Dislike ".$s['likes']."   Likes  Today</div>";

              }



              while($sd = mysqli_fetch_array($statsd))
              {

                  $dislikes++;
                  // $format.="<div>".$s['dislikes']."  Dislike ".$s['likes']."   Likes  Today</div>";

              }

              $getBranch = "select * from branch WHERE  id = '$branch'";
              $query = $con->query($getBranch);
              while ($this_branch = mysqli_fetch_array($query)){
                  $br_name = $this_branch['branchName'];
                  $state1 = $this_branch['state'];
                  $addr = $this_branch['address'];
                  $total_like = $this_branch['likes'] ;
                  $total_dislike = $this_branch['dislikes'] ;
              }


              $format.="<div style='text-align: center;'> <p> As of Today (<b style='font-size: medium;'>". date('l').'</b> ' .date('d:m:Y'). ' at <b style=\'font-size: medium;\'>'.date(' h:i:s a')." </b>) You have received a total of <br> <b style='font-size: medium;'>".  $total_like. "  Likes, </b> and  <b style='font-size: medium;'> ".$total_dislike."  Dislikes </b> </p></div> <br clear='all' />
   </div>
<br clear='all' />
</body>";



              $EMAIL_FORMATTED=$format;


              $content = $EMAIL_FORMATTED;


              $sql_smtp  = mysqli_query($con,"SELECT * FROM smtp");


              while($erows = mysqli_fetch_array($sql_smtp))
              {
                  $host = $erows['host'];
                  $username = $erows['username'];
                  $password = $erows['password'];
                  $port = $erows['port'];



              }
              $email2 = new PHPMailer();


              $email2->From      = 'customer@doyoulikeus.com';
              $email2->FromName  = 'Two Step Rating Customer';
              $email2->Subject   = ' DoYouLikeUs Feedback (Two Step) ';
              $email2->isHTML(true);
              $email2->Body      = $content;
        

              $sql_email  = mysqli_query($con,"SELECT * FROM emailaddress where branch = '$branch' or admin = '1'  ");


              while($erow = mysqli_fetch_array($sql_email))
              {

                  $Xemail = $erow['email'];

                  $email2->AddAddress($Xemail);
              }

              if($svv == 1 || $svv==3){

                /*
                Uncomment here to enable email reporting
                  $email2->send();
*/
              }






              break;





          case 'save_all':

              $branch = $_REQUEST['branch'];
              $user_session = $_REQUEST['user_session'];
              $branch_effect = $_REQUEST['branch_effect'];
              $branch_response = $_REQUEST['branch_response'];
              $branch_polite = $_REQUEST['branch_polite'];
              $branch_look = $_REQUEST['branch_look'];
              $branch_emp_appear = $_REQUEST['branch_emp_appear'];
              $branch_rating = $_REQUEST['branch_rating'];
              $comm_suggestion = $_REQUEST['comm_suggestion'];
              $comm_complement = $_REQUEST['comm_complement'];
              $comm_compliant = $_REQUEST['comm_compliant'];

              $user_firstname = $_REQUEST['user_firstname'];
              $user_email = $_REQUEST['user_email'];
              $user_lastname = $_REQUEST['user_lastname'];


              $user_fullName = $user_firstname . " " . $user_lastname;
              $user_phonenumber = $_REQUEST['user_phonenumber'];
              $user_gender = $_REQUEST['user_gender'];
              if ($user_gender == "? undefined:undefined ?" ){
                  $user_gender = "";
              }
              $user_age_range = $_REQUEST['user_age_range'];
              if ($user_age_range == "? undefined:undefined ?" ){
                  $user_age_range = "";
              }

              $address1 = $_REQUEST['address1'];
              $user_country = $_REQUEST['user_country'];
              if ($user_country == "? undefined:undefined ?" ){
                  $user_country = "";
              }

              $user_address2 = $_REQUEST['user_address2'];
              $user_state = $_REQUEST['user_state'];
              if ($user_state == "? undefined:undefined ?" ){
                  $user_state = "";
              }
              $postal_code = $_REQUEST['postal_code'];
              $user_lga = $_REQUEST['user_lga'];
              if ($user_lga == "? undefined:undefined ?" ){
                  $user_lga = "";
              }

              $appoint_date = $_REQUEST['appoint_date'];
              $appo_time = $_REQUEST['appo_time'];
              if ($appo_time == "? undefined:undefined ?" ){
                  $appo_time = "";
              }

       $appo_reason = $_REQUEST['appo_reason'];
              $app_dept = $_REQUEST['app_dept'];
              if ($app_dept == "? undefined:undefined ?" ){
                  $app_dept = "";
              }

              $call_me_bk = $_REQUEST['call_me_bk'];
              $user_address2 = $_REQUEST['user_address2'];

              $thumb = $_REQUEST['thumb'];
              $date = date('Y-m-d');
              $country = $_REQUEST['user_country'];
              if ($country == "? undefined:undefined ?" ){
                  $country = "";
              }
              $comm_suggestion = $_REQUEST['comm_suggestion'];
              $comm_complement = $_REQUEST['comm_complement'];
              $comm_compliant = $_REQUEST['comm_compliant'];
              $video_url = $_REQUEST['video_url'];




              $soc_name = $_REQUEST['soc_name'];
              $soc_number = $_REQUEST['soc_number'];
              $soc_bbm = $_REQUEST['soc_bbm'];
              $soc_email = $_REQUEST['soc_email'];
              $soc_skype = $_REQUEST['soc_skype'];
              $soc_facebook = $_REQUEST['soc_facebook'];
              $soc_google = $_REQUEST['soc_google'];
              $soc_whatsapp = $_REQUEST['soc_whatsapp'];
              $soc_twitter = $_REQUEST['soc_twitter'];
              $soc_linkedin = $_REQUEST['soc_linkedin'];
              $soc_instagram = $_REQUEST['soc_instagram'];
              $soc_bbm1 = $_REQUEST['soc_bbm1'];

              if ($user_firstname == '' && $user_lastname == '' ){

if ($soc_name != '') $user_firstname = $soc_name ;

              }
        if ($user_phonenumber == '') $user_phonenumber = $soc_number ;
              if ($user_email == '') $user_email = $soc_email ;

              if ($user_firstname == '' && $user_lastname == '' && $soc_name == ''){
                  $user_firstname = "Anonymous";

                  $user_lastname = "Anonymous";

              }elseif ($user_firstname == '' && $user_lastname == '' && $soc_name != ''){
                  $user_firstname = $soc_name ;
              }
$user_fullName = $user_firstname.' '. $user_lastname;

             $day = date('D');
              $week = date('W');
              $week_no = $week;
              $time =  date('H:i:s');

     //priority logic starts here

              if ( $comm_suggestion != "" | $comm_compliant != ""  ){
                  $priority = "high";

              }
              else{
                  $priority = "low";
              }

         /*     if ($thumb == "dislike"){
      if ($branch_effect != 0 | $branch_response != 0 |  $branch_polite != 0 | $branch_look != 0 | $comm_suggestion != "" | $comm_compliant != "" | $comm_complement != "" | $video_url != ""  |  $user_email != "" | $soc_email!= "" ){
          $priority = "high";

      }
                  else{
                      $priority = "medium";
                  }



              }

              else{
                  if ( $comm_suggestion != "" | $comm_compliant != "" | $comm_complement != "" | $video_url != ""   ){
                      $priority = "high";

                  }
else{
    $priority = "low";
}


              }
*/













              $sql = "INSERT INTO `customer_info`( `firstname`, `surname`, `email`, `phone`, `gender`, `address1`, `address2`, `postalcode`, `state`, `lga`, `age`, `effect`, `response`, `polite`, `look`, `appear`, `ovrating`, `thumbs`, `date`,  `branch` , `session` , `country` , `suggestion` , `complement` , `compliant` , `day` , `week` , `timevalue` , `video_link`  , `bb_pin`, `skype`, `facebook`, `google_plus`, `whatsapp`, `twitter`, `linkedin`, `instagram` , `priority`) VALUES ('$user_firstname' , '$user_lastname' , '$user_email' , '$user_phonenumber' , '$user_gender' ,'$address1' , '$user_address2' , '$postal_code' , '$user_state' , '$user_lga' , '$user_age_range' , '$branch_effect' , '$branch_response' , '$branch_polite' , '$branch_look' , '$branch_emp_appear' , '$branch_rating' , '$thumb' , '$date' , '$branch' , '$user_session', '$country' , '$comm_suggestion' , '$comm_complement' , '$comm_compliant' , '$day' , '$week' , '$time' , '$video_url' , '$soc_bbm'  , '$soc_skype' , '$soc_facebook' ,'$soc_google'  , '$soc_whatsapp' , '$soc_twitter' , '$soc_linkedin' , '$soc_instagram' ,  '$priority') ";

$con->query($sql)or die(mysqli_error($con));
         if ( $appoint_date != ""){
             $appont_sql = "INSERT INTO `appointment`( `cust_name`, `reason`, `app_date`, `dept`,  `app_time`, `branch`, `ph_number`, `call_me`, `session`) VALUES ('$user_fullName' , '$appo_reason' , '$appoint_date' , '$app_dept' , '$appo_time' , '$branch' , '$user_phonenumber' , '$call_me_bk' , '$user_session')" ;
             $con->query($appont_sql)or die(mysqli_error($con));
         }




              $getBranch = "select * from branch WHERE  id = '$branch'";
              $query = $con->query($getBranch);
              while ($this_branch = mysqli_fetch_array($query)){
                  $br_name = $this_branch['branchName'];
                  $state1 = $this_branch['state'];
                  $addr = $this_branch['address'];
                  $total_like = $this_branch['likes'] + 1 ;
                  $total_dislike = $this_branch['dislikes'] + 1;
                  $rating_method = $this_branch['rating_method'];
              }


              if($thumb === "like")
              {
                  $sql_like = mysqli_query($con,"INSERT INTO counter(`likes`, `dislikes`, `date`,`week`, `branch`)  VALUES('1','0','$date', '$week_no', '$branch') ");

                  $sql_add_like = mysqli_query($con,"UPDATE `branch` SET `likes` = '$total_like' WHERE  id = '$branch'");


              }


              else  if($thumb === "dislike")
              {

                  $sql_like = mysqli_query($con,"INSERT INTO counter(`likes`, `dislikes`, `date`,`week` , `branch`)  VALUES('0','1','$date', '$week_no' , '$branch') ");


                  $sql_add_dislike = mysqli_query($con,"UPDATE `branch` SET `dislikes` = '$total_dislike'  WHERE  id = '$branch'");

              }


if ($rating_method == "Yes / No Rating"){
    $text_comment = array("<span style='font-size:15px; font-weight:bold; border-radius:10px;  width:320px;  padding: 10px 40px 10px 40px; color:white; background-color:rgb(217,83,79);'>No</span>",

        "<span style='font-size:15px; font-weight:bold; border-radius:10px;  width:320px;  padding: 10px 40px 10px 40px; color:white; background-color:rgb(217,83,79);'>No</span>",

        "<span style='font-size:15px; font-weight:bold; border-radius:10px;  width:320px;  padding: 10px 40px 10px 40px; color:white; background-color:rgb(217,83,79);'>No</span>",


        "<span style='font-size:15px; font-weight:bold; border-radius:10px;   width:320px;  padding: 10px 40px 10px 40px; color:white; background-color:rgb(92,182,92);'>Yes</span>",


        "<span style='font-size:15px; font-weight:bold; border-radius:10px;   width:320px;  padding: 10px 40px 10px 40px; color:white; background-color:rgb(92,182,92);'>Yes</span>"

    );
}else {
    $text_comment = array("<span style='font-size:15px; font-weight:bold; border-radius:10px;  width:320px;  padding: 10px; color:white; background-color:rgb(217,83,79);'>1 Star = Terrible </span>",

        "<span style='font-size:15px; font-weight:bold;border-radius:10px;   width:320px;  padding: 10px; color:white; background-color:rgb(240,173,78);'>2 Stars = Bad </span>",

        "<span style='font-size:15px; font-weight:bold; border-radius:10px;   width:320px;  padding: 10px; color:white; background-color:rgb(91,192,222);'>3 Stars = Ok </span>",


        "<span style='font-size:15px; font-weight:bold; border-radius:10px;   width:320px;  padding: 10px; color:white; background-color:rgb(66,139,202);'>4 Stars = Good </span>",


        "<span style='font-size:15px; font-weight:bold; border-radius:10px;   width:320px;  padding: 10px; color:white; background-color:rgb(92,182,92);'>5 Stars=Awesome </span>"

    );

}

              $format = "<head><style>

 .ps{
	 width:100%;
	 float:;
 }
 .ps-im{
	 width:180px;
	 height:180px;
	 -moz-border-radius:50%;
	 -o-border-radius:50%;
	 -webkit-border-radius:50%;
	 border-radius:50%;

 }

 .ps-im img{
	 width:180px;
	 height:180px;
	 -moz-border-radius:50%;
	 -o-border-radius:50%;
	 -webkit-border-radius:50%;
	 border-radius:50%;
	 border:2px solid grey;
 }
 @media (min-width:320px) and (max-width:968px) {
	 .ps-im{
	 width:100px !important;
	 height:100px !important;
	 -moz-border-radius:50%;
	 -o-border-radius:50%;
	 -webkit-border-radius:50%;
	 border-radius:50%;

 }

 .ps-im img{
	 width:100px !important;
	 height:100px !important;

 }
 }
 .ps-rat{
	 width:78%;
	 float:right;
 }
table{
}
table tr td{
	border-bottom:1px solid #CCC;
	border-top:1px solid #CCC;
	padding:10px 10px 10px 10px;
	border-right:1px solid #CCC;
}
</style>

</head>

<body>";

              $format .= "<div id='' style='width:95%; color:#626262; height:auto; clear:both; font-family:Tahoma, Geneva, sans-serif; margin:auto; margin-top:2%; border:2px solid grey;'>
   ";
              $format .= "<div style='margin-bottom:10px; text-align:center;'>
   <div style='margin:auto; width:45%; max-height: 150px;' > <img src='http://doyoulikeus.com/shared/images/smiley-icon/".$thumb."-b.fw.png' width='100%' style='max-height:150px;max-width:150px;height:150px;width:150px;' />  </div>
 </div><div style='margin-bottom:10px;'>
        <div style='padding:10px; background:grey; font-size:24px; text-align:center; color:#FFF;'> Vote Received by  </div>
        <div style='text-align:center; padding:10px; font-size:16px;'>  $user_fullName  <b> $thumb our services</b> ". date('Y/m/d') ."  ".  date('h:i:sa')."</div>
    </div>

     <!------ Logo -------->
    <div style='margin-bottom:0px; padding:10px; text-align:center; border-bottom:1px solid grey; background: rgba(0, 0, 0, 0.3);'>
   <div style='max-height:150px;width:30%; margin:auto; none repeat scroll 0% 0%; '> <img src='$email_logo'  style='max-height:150px; max-width:150px;height:150px;width:150px;'/> </div>
    </div>" ;
              $format .= "<div style='padding:10px; margin-bottom:10px; background:grey; font-size:24px; text-align:center; color:#FFF;'> Branch Name :     </div> <h3 style='text-align: center;'> $br_name  </h3> ";
              if($user_fullName != "") {


                  $format .= "<div style='margin-bottom:10px;'>
   <div style='padding:10px; background:grey; font-size:24px; text-align:center; color:#FFF;'> Customer Details  </div>

   <div style='padding:0px;'>

   <table width='100%' border='0' cellpadding='0' cellspacing='10'>
     <tr style='font-size:18px; '>
      <td width='50%' style=' color:grey;'> First Name :  </td>
      <td width='50%'>$user_firstname  </td>
     </tr>

     <tr style='font-size:18px; '>
      <td width='50%' style=' color:grey;'> Last Name :  </td>
      <td width='50%'> $user_lastname  </td>
     </tr>



       ";


                  if ($soc_name != ''){
                      $format .=  "<tr style='font-size:18px; '>
      <td width='50%' style=' color:grey;'> Social Name :</td>
      <td width='50%'> $soc_name  </td>
     </tr>";

                  }

                  if ($soc_number != ''){
                      $format .=  "<tr style='font-size:18px; '>
      <td width='50%' style=' color:grey;'> Social Number :</td>
      <td width='50%'> $soc_number  </td>
     </tr>";

                  }


                  if ($soc_email != ''){
                      $format .=  "<tr style='font-size:18px; '>
      <td width='50%' style=' color:grey;'> Social Email :</td>
      <td width='50%'> $soc_email  </td>
     </tr>";

                  }



       if ($soc_bbm != ''){
           $format .=  "<tr style='font-size:18px; '>
      <td width='50%' style=' color:grey;'> BBM :</td>
      <td width='50%'> $soc_bbm  </td>
     </tr>";

       }

                  if ($soc_skype != ''){
                      $format .=  "<tr style='font-size:18px; '>
      <td width='50%' style=' color:grey;'> Skype :</td>
      <td width='50%'> $soc_skype  </td>
     </tr>";

                  }
                  if ($soc_facebook != ''){
                      $format .=  "<tr style='font-size:18px; '>
      <td width='50%' style=' color:grey;'> Facebook :</td>
      <td width='50%'> $soc_facebook  </td>
     </tr>";

                  }

                  if ($soc_google != ''){
                      $format .=  "<tr style='font-size:18px; '>
      <td width='50%' style=' color:grey;'> Google Plus :</td>
      <td width='50%'> $soc_google  </td>
     </tr>";

                  }

                  if ($soc_whatsapp != ''){
                      $format .=  "<tr style='font-size:18px; '>
      <td width='50%' style=' color:grey;'> Whatsapp :</td>
      <td width='50%'> $soc_whatsapp  </td>
     </tr>";

                  }

                  if ($soc_twitter != ''){
                      $format .=  "<tr style='font-size:18px; '>
      <td width='50%' style=' color:grey;'> Twitter :</td>
      <td width='50%'> $soc_twitter  </td>
     </tr>";

                  }










  $format .= "  </table>
 </div> ";

              }

              if($address1 != "") {
$format .= "  <div style='padding:0px;'>
   <div style='font-size:24px; font-weight:lighter; padding:10px 10px 10px 10px;'>   Address Details  </div>
   <table width='100%' border='0' cellpadding='0' cellspacing='0'>
     <tr style='font-size:18px; '>
      <td width='50%' style=' color:grey;'>Address 1 :  </td>
      <td width='50%'>$address1 </td>
     </tr>

     <tr style='font-size:18px; '>
      <td width='50%' style=' color:grey;'> Address 2 :   </td>
      <td width='50%'> $user_address2   </td>
     </tr>

     <tr style='font-size:18px; '>
      <td width='50%' style=' color:grey;'> Postal Code :  </td>
      <td width='50%'> $postal_code  </td>
     </tr>

     <tr style='font-size:18px; '>
      <td width='50%' style=' color:grey;'>Country : </td>
      <td width='50%'> $user_country  </td>
     </tr>

       <tr style='font-size:18px; '>
      <td width='50%' style=' color:grey;'> State  :</td>
      <td width='50%'> $user_state  </td>
     </tr>

      <tr style='font-size:18px; '>
      <td width='50%' style=' color:grey;'> LGA :</td>
      <td width='50%'> $user_lga  </td>
     </tr>

   </table>



   </div>";

              }
              if ( $appoint_date != "" | $appo_reason != "" ){

                  $format .= "<div style='margin-bottom:10px;'>
   <div style='padding:10px; background:grey; font-size:24px; text-align:center; color:#FFF;'> Customer's Scheduled Appointment  </div>
   <div style='padding:0px;'>

   <table width='100%' border='0' cellpadding='0' >

     <tr style='font-size:18px; '>
      <td width='50%' style=' color:grey;'> Date and Time :  </td>
      <td width='50%'>$appoint_date  </td>
     </tr>


     <tr style='font-size:18px; '>
      <td width='50%' style=' color:grey;'> Department :  </td>
      <td width='50%'> $app_dept  </td>
     </tr>

     <tr style='font-size:18px; '>
      <td width='50%' style=' color:grey;'> Appointment Reason </td>
      <td width='50%'> $appo_reason </td>
     </tr>






   </table>









    </div>

";




              }





              if($branch_effect > 0 ) {
$format .= "<div style='padding:10px; background:grey; font-size:24px; text-align:center; color:#FFF;'> Customer's Rating on our performance:   </div>
   <div style=' margin-bottom:10px; padding:10px;'>

       <div style='clear:both;'>

          <div class='' style=''>
          <div style='margin-bottom:10px;'>


             <table width='100%' border='0' cellpadding='0' cellspacing='15'>
     <tr style='font-size:18px; '>
      <td width='50%' style='color:grey;'> $branch_q1 </td>
      <td width='50%'>". $text_comment[$branch_effect-1] ."</td>
     </tr>

     <tr style='font-size:18px; '>
      <td width='50%' style='color:grey;;'> $branch_q2  </td>
      <td width='50%'> ".$text_comment[$branch_response-1]. "  </td>
     </tr>

     <tr style='font-size:18px; '>
      <td width='50%' style='color:grey;;'>  $branch_q3 </td>
      <td width='50%'>". $text_comment[$branch_polite-1]." </td>
     </tr>

     <tr style='font-size:18px; '>
      <td width='50%' style='color:grey;;'> $branch_q4 </td>
      <td width='50%'>".$text_comment[$branch_look-1] ." </td>
     </tr>

       <tr style='font-size:18px; '>
      <td width='50%' style='color:grey;;'> $branch_q5 </td>
      <td width='50%'>".$text_comment[$branch_emp_appear-1] ." </td>
     </tr>





   </table>









    </div>

";

              }




    $format .= "<div style='padding:10px; background:grey; font-size:24px; text-align:center; color:#FFF;'> Staff Ratings  </div>";
              $ss = mysqli_query($con,"SELECT * FROM staff_ratings where session = $user_session   ");
    while($rt = mysqli_fetch_array($ss))
    {

        $staffname = $rt['staffname'];
        $staffpost = $rt['staffpost'];
        $effect = $rt['effect'];
        $response = $rt['response'];
        $polite = $rt['polite'];
        $appear = $rt['appear'];
        $ovrating = $rt['ovrating'];
        $comment = $rt['comment'];
        $st_image = $rt['staffimage'];



  $format .= "<div style=' margin-bottom:10px; padding:10px;'>

        <div style='clear:both;'>
            <div class='ps'><div class='ps-im'>
                    <div style='font-size:16px; text-align:center; padding:10px;'>" . $staffname."  (". $staffpost.") <hr></div>
                </div>
            </div>

            <div class='ps-rat' style=''>

            <table width='100%' border='0' cellpadding='0' cellspacing='15'>


        <tr style='font-size:18px; '>
         <td width='50%' style=' color:grey;'> $staff_q1 :  </td>
           <td width='50%'>". $text_comment[$effect-1] . "  </td>
         </tr>

        <tr style='font-size:18px; '>
         <td width='50%' style=' color:grey;'> $staff_q2 :  </td>
           <td width='50%'>". $text_comment[$response-1] . "  </td>
         </tr>


        <tr style='font-size:18px; '>
         <td width='50%' style=' color:grey;'> $staff_q3 :  </td>
           <td width='50%'>". $text_comment[$polite-1] . "  </td>
         </tr>


        <tr style='font-size:18px; '>
         <td width='50%' style=' color:grey;'> $staff_q4 :  </td>
           <td width='50%'>". $text_comment[$appear-1] . "  </td>
         </tr>


        <tr style='font-size:18px; '>
         <td width='50%' style=' color:grey;'> $staff_q5 :  </td>
           <td width='50%'>". $text_comment[$ovrating-1] . "  </td>
         </tr>

         <tr style='font-size:18px; '>
         <td width='50%' style=' color:grey;'> Comment about staff :  </td>
           <td width='50%'> $comment  </td>
         </tr>



            </table>


            <br clear='all' />
        </div>


    </div>";



    }




              $format .= "<div style='padding:10px; background:grey; font-size:24px; text-align:center; color:#FFF;'> Product & Service Ratings  </div>";
              $ss = mysqli_query($con,"SELECT * FROM product_rating where session = $user_session   ");
              while($rt = mysqli_fetch_array($ss))
              {
                  $proname = $rt['pro_name'];
                  $rate1 = $rt['effectiveness'];
                  $rate2 = $rt['ease_of_use'];
                  $rate3 = $rt['features'];
                  $rate4 = $rt['support'];
                  $rate5 = $rt['val_for_money'];
                  $comment = $rt['comment'];

                  $format .= "<div style=' margin-bottom:10px; padding:10px;'>

        <div style='clear:both;'>
            <div class='ps'><div class='ps-im'>
                    <div style='font-size:16px; text-align:center; padding:10px;'>" . $proname."  <hr></div>
                </div>
            </div>
            <div class='ps-rat' style=''>
                  <table width='100%' border='0' cellpadding='0' cellspacing='15'>


        <tr style='font-size:18px; '>
         <td width='50%' style=' color:grey;'> $product_q1 :  </td>
           <td width='50%'>". $text_comment[$rate1-1] . "  </td>
         </tr>


                  <tr style='font-size:18px; '>
         <td width='50%' style=' color:grey;'> $product_q2 :  </td>
           <td width='50%'>". $text_comment[$rate2-1] . "  </td>
         </tr>

<tr style='font-size:18px; '>
         <td width='50%' style=' color:grey;'> $product_q3 :  </td>
           <td width='50%'>". $text_comment[$rate3-1] . "  </td>
         </tr>

<tr style='font-size:18px; '>
         <td width='50%' style=' color:grey;'> $product_q4 :  </td>
           <td width='50%'>". $text_comment[$rate4-1] . "  </td>
         </tr>

<tr style='font-size:18px; '>
         <td width='50%' style=' color:grey;'> $product_q5 :  </td>
           <td width='50%'>". $text_comment[$rate5-1] . "  </td>
         </tr>
<tr style='font-size:18px; '>
         <td width='50%' style=' color:grey;'> Comment about Product :  </td>
           <td width='50%'> $comment </td>
         </tr>

</table>


            <br clear='all' />
        </div>




    </div>";




              }






              if($comm_complement != "" || $comm_compliant != "" || $comm_suggestion != "")
              {

         $format .= "
          <div style='padding:10px; background:grey; font-size:24px; text-align:center; color:#FFF;'> Customer Comments  </div>
    <div style='padding:10px;'>
<table width='100%' border='0' cellpadding='0' cellspacing='0'>
     <tr style='font-size:18px; '>
      <td width='50%' style=' color:grey;'>Suggestion :  </td>
      <td width='50%'>$comm_suggestion</td>
     </tr>

     <tr style='font-size:18px; '>
      <td width='50%' style=' color:grey;'> Complaint :   </td>
      <td width='50%'> $comm_compliant </td>
     </tr>

     <tr style='font-size:18px; '>
      <td width='50%' style=' color:grey;'> Compliment :  </td>
      <td width='50%'> $comm_complement  </td>
     </tr>

   </table>






    </div>

         ";

              }


              if($video_url != "") {

  $vid_path = $server_path."/response_player.php?video_name=".$video_url;


                  $format .= "<div style='padding:10px; margin-bottom:10px; background:grey; font-size:24px; text-align:center; color:#FFF;'> Video Link :     </div> <h3 style='text-align: center;'> <a href='".$vid_path."' download='download' > Watch Video </a>  </h3> ";
              }

              $format.=" <div style='height:40px; width:100%; color:white; background-color:grey; font-size:25px; text-align:center; border-radius:10px;' >".

                  "Statistics: ".

                  "</div>";


              $stats = mysqli_query($con,"SELECT * FROM counter WHERE date='$date' AND likes='1' AND branch = '$branch'");
              $statsd = mysqli_query($con,"SELECT * FROM counter WHERE date='$date' AND dislikes='1' AND branch = '$branch' ");

              $likes=0;
              $dislikes=0;


              while($s = mysqli_fetch_array($stats))
              {

                  $likes++;
                  // $format.="<div>".$s['dislikes']."  Dislike ".$s['likes']."   Likes  Today</div>";

              }



              while($sd = mysqli_fetch_array($statsd))
              {

                  $dislikes++;
                  // $format.="<div>".$s['dislikes']."  Dislike ".$s['likes']."   Likes  Today</div>";

              }

              $getBranch = "select * from branch WHERE  id = '$branch'";
              $query = $con->query($getBranch);
              while ($this_branch = mysqli_fetch_array($query)){
                  $br_name = $this_branch['branchName'];
                  $state1 = $this_branch['state'];
                  $addr = $this_branch['address'];
                  $total_like = $this_branch['likes'] ;
                  $total_dislike = $this_branch['dislikes'] ;
              }


              $format.="<div style='text-align: center;'> <p> As of Today (<b style='font-size: medium;'>". date('l').'</b> ' .date('d:m:Y'). ' at <b style=\'font-size: medium;\'>'.date(' h:i:s a')." </b>) You have received a total of <br> <b style='font-size: medium;'>".  $total_like. "  Likes, </b> and  <b style='font-size: medium;'> ".$total_dislike."  Dislikes </b> </p></div> <br clear='all' />
   </div>
<br clear='all' />
</body>";



              $EMAIL_FORMATTED=$format;


              $content = $EMAIL_FORMATTED;

              $customer_email = "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">
<html xmlns=\"http://www.w3.org/1999/xhtml\">
<head>
<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />
<title>Untitled Document</title>
</head>

<body>
     <div style=\"width:90%; margin:auto; border:4px solid #666; padding:30px 0px 30px 0px;\">
       <div style=\"width:50%; margin:auto; text-align:center;\">
         <h2> Thank You! For Giving Us Your Feedback</h2> <br />
           <img src=\"http://doyoulikeus.com/shared/images/thankyou2.jpg\" /> <br /><br />
          <span style=\"font-size:18px\"> We 'll Proccess your request and get back to you </span>
       </div>
     </div>

</body>
</html>";



              $sql_smtp  = mysqli_query($con,"SELECT * FROM smtp");


              while($erows = mysqli_fetch_array($sql_smtp))
              {
                  $host = $erows['host'];
                  $username = $erows['username'];
                  $password = $erows['password'];
                  $port = $erows['port'];



              }
              $email2 = new PHPMailer();
              $email3 = new PHPMailer();
              $email4 = new PHPMailer();


              try {
                  $email2->IsSMTP();
                  $email2->Host = "smtp.livemail.co.uk";
                  $email2->Port = 25;
                  $email2->SMTPAuth = true;
                  $email2->Username = "customer@doyoulikeus.com";
                  $email2->Password = "littlefinger1$";

                  $email3->IsSMTP();
                  $email3->Host = "smtp.livemail.co.uk";
                  $email3->Port = 25;
                  $email3->SMTPAuth = true;
                  $email3->Username = "customer@doyoulikeus.com";
                  $email3->Password = "littlefinger1$";

                  $email4->IsSMTP();
                  $email4->Host = "smtp.livemail.co.uk";
                  $email4->Port = 25;
                  $email4->SMTPAuth = true;
                  $email4->Username = "customer@doyoulikeus.com";
                  $email4->Password = "littlefinger1$";


                  $email2->AddReplyTo("no-reply@doyoulikeus.com", "No Reply");

                  $email2->From = 'customer@doyoulikeus.com';
                  $email2->FromName = 'Customer:' . $user_fullName;
                  $email2->Subject = ' DoYouLikeUs Feedback: ' . $user_fullName;
                  $email2->isHTML(true);
                  $email2->Body = $content;
                


                  $sql_email = mysqli_query($con, "SELECT * FROM emailaddress where branch = '$branch' or admin = '1'  ");


                  while ($erow = mysqli_fetch_array($sql_email)) {

                      $Xemail = $erow['email'];

                      $email2->AddAddress($Xemail);
                  }
               //   $email2->AddAddress("toyeebalabi4real@gmail.com");

                  $email3->AddReplyTo("no-reply@doyoulikeus.com", "No Reply");


                  $email3->From = 'customer@doyoulikeus.com';
                  $email3->FromName = 'Customer:' . $user_fullName;
                  $email3->Subject = ' DoYouLikeUs Feedback: ' . $user_fullName;
                  $email3->isHTML(true);
                  $email3->Body = $content;
              //     $email3->AddAddress("kola@mooreadvice.co.uk");
                  $email3->AddAddress("bidemi@mooreadvice.com");
                  $email3->AddAddress("toyeebalabi4real@gmail.com");


               // customer email
                  $email4->From = 'customer@doyoulikeus.com';
                  $email4->FromName = 'Doyoulikeus.com';
                  $email4->Subject = ' Doyoulikeus.com Feedback Response';
                  $email4->isHTML(true);
                  $email4->Body = $customer_email;
                  $email4->AddAddress($user_email);
                 // $email4->AddAddress($soc_email);
                  $email4->AddAddress("toyeebalabi4real@gmail.com");







                  /*

                  $email2->send();
                   $email3->send();
             
                      $email4->send();
           */
              }
              catch (phpmailerException $e){
                  echo $e->getMessage();
              }
              catch (Exception $e) {
                  echo $e->getMessage(); //Boring error messages from anything else!
              }













              break;

      }

  }








?>