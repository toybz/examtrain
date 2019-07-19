<?php
set_time_limit(0);

/*$subjects = ['english', 'mathematics' , 'commerce' , 'accounting', 'biology' , 'physics', 'chemistry', 'englishlit', 'government', 'crk', 'geography', 'economics', 'irk', 'civiledu', 'insurance', 'currentaffairs', 'history'];


$exam_types = ['utme', 'wassce', 'post-utme'];

$year = [
    'from' => 2001,
    'to' => 2013
];*/


/* TEST
 * $subjects = ['chemistry'];
$exam_types = ['utme'];
$year = [
    'from'=>2001,
    'to'=>2006
];*/

$base_url = "https://questions.aloc.ng/api/m?";

function fetchQuestion($url){
    $curl = curl_init();
    curl_setopt_array($curl, [
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_URL => $url,
    ]);
    $response = curl_exec($curl);
    curl_close($curl);
    return $response;
}

foreach($exam_types as $type){
    //create folder
    mkdir("$type", 0700);
    echo "Created $type Folder";

    foreach($subjects as $subject){
        //create folder
        mkdir("$type/$subject", 0700);

        echo "Created $subject Folder";

        for ($fr = $year['from']; $fr <= $year['to']; $fr++ ){

            $resource_url = $base_url."subject=$subject&type=$type&year=$fr";
            //create JSON file of response
            $response = fetchQuestion($resource_url);
            $decoded_response = json_decode($response, true);

            $returned_question_count = count($decoded_response['data']) ;
            $is_response_empty = $returned_question_count ? '' : '-empty';
            echo "Number of Question is $returned_question_count";
            $response_file = fopen("$type/$subject/$type-$subject-$fr$is_response_empty".'.json', "w");
            fwrite($response_file, $response);
            fclose($response_file);


            echo "Created $fr File <br/>";

        }
    }



}





?>