frontend <- read.csv("./performantie_frontend.csv", sep = ",")
attach(frontend)

boxplot(frontend, 
        main = 'Spreiding van de laadtijd van main.bundle.js', 
        xlab = 'applicatie', 
        ylab = 'tijd in ms',
        names = c('FP Frontend', 'OOP Frontend'))

t.test(Frontend.FP, Frontend.OOP, var.equal = TRUE)

shapiro.test(Frontend.FP)
shapiro.test(Frontend.OOP)

var(Frontend.FP)
var(Frontend.OOP)

backend <- read.csv("./performantie_backend.csv", sep =  ",")
attach(backend)
par(mar=c(10,4,4,1))

boxplot(backend,
        main = 'Spreiding van de laadtijd van backend requests', 
        ylim = c(0,30),
        ylab = 'tijd in ms',
        names = c('GET FP', 'GET OOP', 'POST FP', 'POST OOP', 'DELETE FP', 'DELETE OOP'),
        las = 2)

t.test(GET.FP, GET.OOP)
t.test(POST.FP, POST.OOP)
  t.test(DELETE.FP, DELETE.OOP)
