var eventDates = [1, 10, 12, 22],
    $picker = $('#custom-cells'),
    $content = $('#custom-cells-events'),
    sentences = ["Servicio 1. Cliente: Roberto Quesada", "Servicio 2. Cliente: Ramón Jiménez", "Servicio 3. Cliente: Rodrigo Leal", "Servicio 4. Cliente: Elsa Romero"];

$picker.datepicker({
    language: 'es',
    onRenderCell: function (date, cellType) {
        var currentDate = date.getDate();
        // Add extra element, if `eventDates` contains `currentDate`
        if (cellType == 'day' && eventDates.indexOf(currentDate) != -1) {
            return {
                html: currentDate + '<span><i class="material-icons">error</i></span>'
            }
        }
    },
    onSelect: function onSelect(fd, date) {
        var title = '', content = ''
        // If date with event is selected, show it
        if (date && eventDates.indexOf(date.getDate()) != -1) {
            title = fd;
            content = sentences[Math.floor(Math.random() * eventDates.length)];
        }
        $($content).html("<strong>"+title+"</strong>");
        $($content).append("<p>"+content+"</p>");
    }
})

// Select initial date from `eventDates`
var currentDate = currentDate = new Date();
$picker.data('datepicker').selectDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), 10))