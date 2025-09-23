from datetime import datetime
from datetime import date
print(datetime.now())

from datetime import timedelta

# Crea un timedelta de 5 días
delta = timedelta(days=5)

# Crear un timedelta de 3 horas, 30 minutos e 10 segundos
delta_otro = timedelta(hours=3, minutes=30, seconds=10)


from datetime import datetime, timedelta

inicio = datetime(2024, 4, 1)
fin = datetime(2024, 4, 10)

# Calcula a diferenza entre as dúas datas
delta = fin - inicio

from datetime import datetime, timedelta

inicio = datetime(2024, 4, 1)
delta = timedelta(days=5) #Puede ser con años, dias horas etc...

# Suma o timedelta a unha data
nueva_fecha = inicio + delta

# Resta o timedelta a unha data
fecha_anterior = inicio - delta