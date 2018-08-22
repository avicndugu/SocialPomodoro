import time
def counterseconds(n):
	while n>=0:
		print n
		time.sleep(1)
		n= n-1
		if n==0:
			n=60
			
def counterminutes(nm):
	while nm>0:
		print nm
		time.sleep(60)
		nm-=1

counterseconds(59)
counterminutes(25)