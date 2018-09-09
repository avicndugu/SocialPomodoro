import time
			
def counterminutes(minutes):
	while minutes>0:
		print minutes
		
		def counterseconds(n):
			while n>=0:
				print n
				time.sleep(1)
				n= n-1
		
		counterseconds(60)
		
		minutes-=1
		if minutes==0:
			print minutes
	
def main():
	startTime=input("Enter a number of minutes: ")
	counterminutes(startTime)
main()
