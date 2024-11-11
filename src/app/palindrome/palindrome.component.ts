import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-palindrome',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './palindrome.component.html',
  styleUrls: ['./palindrome.component.scss']
})
export class PalindromeComponent {
  inputText: string = '';
  results: { text: string; index: number; length: number }[] = [];

  findPalindromes() {
    if (!this.inputText.trim()) {
      alert('Please enter some text.');
      return;
    }

    const palindromes: { [key: string]: { index: number, length: number } } = {};

    for (let i = 0; i < this.inputText.length; i++) {
      const oddPalindrome = this.expandAroundCenter(this.inputText, i, i);
      this.addPalindrome(oddPalindrome, i - Math.floor(oddPalindrome.length / 2), palindromes);

      const evenPalindrome = this.expandAroundCenter(this.inputText, i, i + 1);
      this.addPalindrome(evenPalindrome, i - Math.floor(evenPalindrome.length / 2) + 1, palindromes);
    }

    this.results = Object.keys(palindromes)
      .map(text => ({ text, index: palindromes[text].index, length: palindromes[text].length }))
      .filter(result => result.length > 1)
      .sort((a, b) => b.length - a.length)
      .slice(0, 3);
  }

  private expandAroundCenter(s: string, left: number, right: number): string {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right);
  }

  private addPalindrome(palindrome: string, index: number, palindromes: { [key: string]: { index: number, length: number } }): void {
    if (!palindromes[palindrome]) {
      palindromes[palindrome] = { index, length: palindrome.length };
    }
  }
}
