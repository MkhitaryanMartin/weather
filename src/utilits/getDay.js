export function getDayText(dt_txt) {
    const dateTime = new Date(dt_txt);
    const today = new Date();
    
    if (dateTime.getDate() === today.getDate()) {
        return 'Today ' + dateTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false  });
    } else if (dateTime.getDate() === today.getDate() + 1) {
        return 'Tomorrow ' + dateTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false });
    } else {
        return dateTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) + ' ' + dateTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false });
    }
}