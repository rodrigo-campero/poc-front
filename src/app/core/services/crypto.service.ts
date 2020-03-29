import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  // npm install crypto-js
  // npm install -D @types/crypto-js

  private key = '1njanrhdkCnsahrebfdMvbjo32hqnd31';
  private iv = 'jsKidmshatyb4jdu';
  private keySize = 128 / 8;

  constructor() { }

  encryptUsingAES256(plaintext: string): string {
    const _key = CryptoJS.enc.Utf8.parse(this.key);
    const _iv = CryptoJS.enc.Utf8.parse(this.iv);
    const encrypted = CryptoJS.AES.encrypt(plaintext, _key, {
      keySize: this.keySize,
      iv: _iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
  }

  decryptUsingAES256(ciphertext: string): string {
    let _key = CryptoJS.enc.Utf8.parse(this.key);
    let _iv = CryptoJS.enc.Utf8.parse(this.iv);
    const decrypted = CryptoJS.AES.decrypt(
      ciphertext, _key, {
      keySize: this.keySize,
      iv: _iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
}
