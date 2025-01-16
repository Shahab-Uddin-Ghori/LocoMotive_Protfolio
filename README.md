# LocoMotive_Protfolio
LocoMotive_Protfolio making protfolio with locomotive  scroll js


// css libaraires 
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <!-- aos animation -->
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <!-- locomotive animation -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.css" />
    <!-- animated .css  -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <!-- magic animation -->
    <link rel="stylesheet" href="yourpath/magic.css">
    <!-- or -->

    <link rel="stylesheet" href="yourpath/magic.min.css">

    <!-- css shake -->
    <link rel="stylesheet" type="text/css" href="csshake.min.css">
    <!-- or from surge.sh -->
    <link rel="stylesheet" type="text/css" href="https://csshake.surge.sh/csshake.min.css">
    <title>Document</title>
</head>

<body>
    <div class="animate__animated animate__bounce animate__delay-2s">Example</div>

    <!-- aos -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <!-- locomotive -->
    <script src="locomotive-scroll.min.js"></script>
    <script>
        (function () {
            var scroll = new LocomotiveScroll();
        })();
    </script>

    <script>
        AOS.init();
    </script>
</body>

</html>
