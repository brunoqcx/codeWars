def anagrams(word, words)
  anagrams = []  
	words.each do |w|
		same_count = true
		w.each_char do |letter|
			same_count = false if w.count(letter) != word.count(letter)
		end
		anagrams << w if same_count
	end
	anagrams    
end